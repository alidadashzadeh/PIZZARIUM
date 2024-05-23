import { useQuery } from "@tanstack/react-query";
import { getPizzas } from "../../services/apiSignatures";

export function useSignaturePizzas(selected) {
  console.log(selected);
  const { isLoading, data: signaturePizzas } = useQuery({
    queryKey: ["signaturePizzas"],
    queryFn: getPizzas,
  });

  let filteredPizzas;

  if (selected === "all") filteredPizzas = signaturePizzas;
  if (selected === "beef")
    filteredPizzas = signaturePizzas?.filter((pizza) => pizza.type === "beef");
  if (selected === "chicken")
    filteredPizzas = signaturePizzas?.filter(
      (pizza) => pizza.type === "chicken"
    );
  if (selected === "veggie")
    filteredPizzas = signaturePizzas?.filter(
      (pizza) => pizza.type === "veggie"
    );
  if (selected === "mixed")
    filteredPizzas = signaturePizzas?.filter((pizza) => pizza.type === "mixed");

  return { signaturePizzas, isLoading, filteredPizzas };
}

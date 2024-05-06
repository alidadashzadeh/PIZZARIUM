import { useQuery } from "@tanstack/react-query";
import { getPizza } from "../../services/apiSignatures";
import { useParams } from "react-router-dom";

export function usePizza() {
  const { pizzaId } = useParams();

  const { isLoading, data: selectedPizza } = useQuery({
    queryKey: ["selectedPizza", pizzaId],
    queryFn: () => getPizza(pizzaId),
  });

  return { isLoading, selectedPizza };
}

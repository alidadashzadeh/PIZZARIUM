import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPizza } from "../services/apiSignatures";
import Spinner from "../ui/Spinner";

export default function SignaturePizza() {
  const { pizzaId } = useParams();

  const { isLoading, data: selectedPizza } = useQuery({
    queryKey: ["selectedPizza", pizzaId],
    queryFn: () => getPizza(pizzaId),
  });

  if (isLoading) return <Spinner />;

  const { id } = selectedPizza;
  console.log(selectedPizza);

  return <div>pizza details of pizza with id : {id}</div>;
}

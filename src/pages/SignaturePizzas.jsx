import styled from "styled-components";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import { useQuery } from "@tanstack/react-query";
import { getPizzas } from "../services/apiSignatures";
import Spinner from "../ui/Spinner";
import SignaturePizzasHeader from "../features/signaturePizza/SignaturePizzasHeader";
import { useSearchParams } from "react-router-dom";
import SignaturePizaaOperations from "../features/signaturePizza/SignaturePizaaOperations";

const StyledSignaturePizzas = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 1rem;
`;

const StyledPizzaList = styled.div`
  padding: 4rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function SignaturePizzas() {
  const [searchParams] = useSearchParams();
  const { isLoading, data: signaturePizzas } = useQuery({
    queryKey: ["signaturePizzas"],
    queryFn: getPizzas,
  });

  const filterValue = searchParams.get("category") || "all";

  let filteredPizzas;

  if (filterValue === "all") filteredPizzas = signaturePizzas;
  if (filterValue === "beef")
    filteredPizzas = signaturePizzas?.filter((pizza) => pizza.type === "beef");
  if (filterValue === "chicken")
    filteredPizzas = signaturePizzas?.filter(
      (pizza) => pizza.type === "chicken"
    );
  if (filterValue === "veggie")
    filteredPizzas = signaturePizzas?.filter(
      (pizza) => pizza.type === "veggie"
    );
  if (filterValue === "mixed")
    filteredPizzas = signaturePizzas?.filter((pizza) => pizza.type === "mixed");

  if (isLoading) return <Spinner />;

  return (
    <StyledSignaturePizzas>
      <SignaturePizzasHeader />
      <SignaturePizaaOperations />
      <StyledPizzaList>
        {filteredPizzas.map((pizza) => (
          <SignaturePizzaItem pizza={pizza} key={pizza.id} />
        ))}
      </StyledPizzaList>
    </StyledSignaturePizzas>
  );
}

export default SignaturePizzas;

import styled from "styled-components";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import { useQuery } from "@tanstack/react-query";
import { getPizzas } from "../services/apiSignatures";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import NavigationList from "../ui/NavigationList";

const StyledSignaturePizzas = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  padding: 1rem 2rem;
`;

const StyledPizzaList = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const options = [
  { label: "All", value: "all" },
  { label: "Beef", value: "beef" },
  { label: "Chicken", value: "chicken" },
  { label: "Mixed Beef & Chicken", value: "mixed" },
  { label: "Veggie", value: "veggie" },
];

function SignaturePizzas() {
  const [selected, setSelected] = useState("all");

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

  if (isLoading) return <Spinner />;

  return (
    <StyledSignaturePizzas>
      <NavigationList
        options={options}
        selected={selected}
        setSelected={setSelected}
        label="Categories"
      />
      {/* <SignaturePizzaNav /> */}
      <StyledPizzaList>
        {filteredPizzas.map((pizza) => (
          <SignaturePizzaItem pizza={pizza} key={pizza.id} />
        ))}
      </StyledPizzaList>
    </StyledSignaturePizzas>
  );
}

export default SignaturePizzas;

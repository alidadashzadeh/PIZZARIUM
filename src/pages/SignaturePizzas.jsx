import styled from "styled-components";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import NavigationList from "../ui/NavigationList";
import { useSignaturePizzas } from "../features/signaturePizza/useSignaturePizzas";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

const StyledSignaturePizzas = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPizzaList = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  gap: 1rem;
`;

const H2 = styled.h2`
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
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

  const { filteredPizzas, isLoading } = useSignaturePizzas(selected);

  if (isLoading) return <Spinner />;

  return (
    <PageTransition>
      <H2>Signature Pizzas</H2>
      <StyledSignaturePizzas>
        <NavigationList
          options={options}
          selected={selected}
          setSelected={setSelected}
          label="Categories"
        />
        <StyledPizzaList as={motion.div} layout>
          <AnimatePresence mode="wait">
            {filteredPizzas.map((pizza) => (
              <SignaturePizzaItem pizza={pizza} key={pizza.id} />
            ))}
          </AnimatePresence>
        </StyledPizzaList>
      </StyledSignaturePizzas>
    </PageTransition>
  );
}

export default SignaturePizzas;

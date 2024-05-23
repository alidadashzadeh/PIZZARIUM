import styled from "styled-components";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import NavigationList from "../ui/NavigationList";
import { useSignaturePizzas } from "../features/signaturePizza/useSignaturePizzas";
import { motion, AnimatePresence } from "framer-motion";
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
`;
const H2 = styled.h2`
  padding: 0 3rem;
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
    <>
      <H2>Signature Pizza</H2>
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
    </>
  );
}

export default SignaturePizzas;

import styled from "styled-components";
import { motion } from "framer-motion";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import { useQuery } from "@tanstack/react-query";
import { getPizzas } from "../services/apiSignatures";
import Spinner from "../ui/Spinner";
import SignaturePizzasHeader from "../features/signaturePizza/SignaturePizzasHeader";
import { useSearchParams } from "react-router-dom";
import SignaturePizaaOperations from "../features/signaturePizza/SignaturePizaaOperations";

const StyledSignaturePizzas = styled(motion.div)`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 1rem;
  padding: 0 1rem;
  padding-top: 4rem;
`;

const StyledPizzaList = styled(motion.div)`
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
  if (filterValue === "non-veggie")
    filteredPizzas = signaturePizzas?.filter((pizza) => !pizza.Veggie);

  if (isLoading) return <Spinner />;

  return (
    <StyledSignaturePizzas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <SignaturePizzasHeader />
      <SignaturePizaaOperations />
      <StyledPizzaList initial="initial" animate="working">
        {filteredPizzas.map((pizza, i) => (
          <SignaturePizzaItem pizza={pizza} key={pizza.id} index={i} />
        ))}
      </StyledPizzaList>
    </StyledSignaturePizzas>
  );
}

export default SignaturePizzas;

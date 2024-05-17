import { useQuery } from "@tanstack/react-query";
import { getSauces } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import SauceItem from "./SauceItem";
import styled from "styled-components";

const StyledSauceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
`;

function SauceList() {
  const { isLoading, data: sauces } = useQuery({
    queryKey: ["sauce"],
    queryFn: getSauces,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3>Sauces</h3>
      <StyledSauceList>
        {sauces.map((sauce) => (
          <SauceItem sauce={sauce} key={sauce.id} />
        ))}
      </StyledSauceList>
    </div>
  );
}

export default SauceList;

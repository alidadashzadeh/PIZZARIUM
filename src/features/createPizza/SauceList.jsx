import { useQuery } from "@tanstack/react-query";
import { getSauces } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import SauceItem from "./SauceItem";
import styled from "styled-components";

const StyledSauceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: first baseline;
  gap: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

function SauceList() {
  const { isLoading, data: sauces } = useQuery({
    queryKey: ["sauce"],
    queryFn: getSauces,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledSauceList>
      {sauces.map((sauce) => (
        <SauceItem sauce={sauce} key={sauce.id} />
      ))}
    </StyledSauceList>
  );
}

export default SauceList;

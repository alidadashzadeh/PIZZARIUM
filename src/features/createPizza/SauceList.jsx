import { useQuery } from "@tanstack/react-query";
import { getSauces } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import CreatePizzaItem from "./CreatePizzaItem";

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
  const { selectCustomSauce } = useOrder();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3>Sauces</h3>
      <StyledSauceList>
        {sauces.map((sauce) => (
          <CreatePizzaItem
            label="sauce"
            item={sauce}
            handleClick={selectCustomSauce}
            key={sauce.id}
          />
        ))}
      </StyledSauceList>
    </div>
  );
}

export default SauceList;

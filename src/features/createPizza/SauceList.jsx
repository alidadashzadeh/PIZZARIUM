import { useQuery } from "@tanstack/react-query";
import { getSauces } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useOrder } from "../../context/OrderContext";
import CreatePizzaItem from "./CreatePizzaItem";
import { CustomPizzaList } from "../../ui/CustomPizzaList";
import styled from "styled-components";

const StyledContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 2;
    grid-column: 1/-1;
  }
`;
function SauceList() {
  const { isLoading, data: sauces } = useQuery({
    queryKey: ["sauce"],
    queryFn: getSauces,
  });
  const { selectCustomSauce } = useOrder();

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <h3>Sauces</h3>
      <CustomPizzaList>
        {sauces.map((sauce, i) => (
          <CreatePizzaItem
            label="sauce"
            item={sauce}
            handleClick={selectCustomSauce}
            key={sauce.id}
            index={i}
          />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default SauceList;

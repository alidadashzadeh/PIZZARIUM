import { getDoughs } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

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
const StyledDoughsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
function DoughList() {
  const { isLoading, data: doughs } = useQuery({
    queryKey: ["doughs"],
    queryFn: getDoughs,
  });
  const { selectCustomDough } = useOrder();

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <StyledDoughsHeader>
        <h3>Doughs</h3>
      </StyledDoughsHeader>
      <CustomPizzaList>
        {doughs.map((dough, i) => (
          <CreatePizzaItem
            label="dough"
            item={dough}
            handleClick={selectCustomDough}
            key={dough.id}
            index={i}
          />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default DoughList;

// <DoughItem dough={dough} key={dough.id} />

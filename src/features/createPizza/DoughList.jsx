import { getDoughs } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

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
    <div>
      <StyledDoughsHeader>
        <h3>Doughs</h3>
      </StyledDoughsHeader>
      <CustomPizzaList>
        {doughs.map((dough) => (
          <CreatePizzaItem
            label="dough"
            item={dough}
            handleClick={selectCustomDough}
            key={dough.id}
          />
        ))}
      </CustomPizzaList>
    </div>
  );
}

export default DoughList;

// <DoughItem dough={dough} key={dough.id} />

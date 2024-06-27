import { useQuery } from "@tanstack/react-query";
import { getCrusts } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
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

function CrustList() {
  const { isLoading, data: crusts } = useQuery({
    queryKey: ["crust"],
    queryFn: getCrusts,
  });
  const { selectCustomCrust } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <StyledContainer>
      <h3>Crusts</h3>
      <CustomPizzaList>
        {crusts.map((crust, i) => (
          <CreatePizzaItem
            label="crust"
            item={crust}
            handleClick={selectCustomCrust}
            key={crust.id}
            index={i}
          />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default CrustList;

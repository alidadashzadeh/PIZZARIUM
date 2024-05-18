import { useQuery } from "@tanstack/react-query";
import { getCrusts } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";

const StyledCrustList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
`;
function CrustList() {
  const { isLoading, data: crusts } = useQuery({
    queryKey: ["crust"],
    queryFn: getCrusts,
  });
  const { selectCustomCrust } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h3>Crusts</h3>
      <StyledCrustList>
        {crusts.map((crust) => (
          <CreatePizzaItem
            label="crust"
            item={crust}
            handleClick={selectCustomCrust}
            key={crust.id}
          />
        ))}
      </StyledCrustList>
    </div>
  );
}

export default CrustList;

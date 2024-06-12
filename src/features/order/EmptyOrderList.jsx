import styled from "styled-components";
import OrderSummary from "./OrderSummary";

const StyledEmpty = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  min-height: 100vh;
  padding: 4rem 6rem;
`;

export default function EmptyOrderList() {
  return (
    <StyledEmpty>
      <h2>
        Your shopping cart is empty, Try some of our signature pizzas and Enjoy
      </h2>
      <div>
        <OrderSummary step="empty" />
      </div>
    </StyledEmpty>
  );
}

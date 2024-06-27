import styled from "styled-components";
import OrderSummary from "./OrderSummary";

const StyledEmpty = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  min-height: 100vh;
  padding: 4rem 6rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;

export default function EmptyOrderList() {
  return (
    <StyledEmpty>
      <span>
        Your shopping cart is empty, Try some of our signature pizzas and Enjoy
      </span>
      <div>
        <OrderSummary step="empty" />
      </div>
    </StyledEmpty>
  );
}

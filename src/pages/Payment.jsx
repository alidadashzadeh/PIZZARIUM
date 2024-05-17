import { styled } from "styled-components";
import OrderSummary from "../features/order/OrderSummary";
import PaymentForm from "../ui/PaymentForm";
import Process from "../features/order/Process";

const StyledPayment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 8rem; */
`;
const StyledAd = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Payment() {
  return (
    <>
      <Process step="payment" />
      <StyledPayment>
        <PaymentForm />
        <StyledAd>
          <h2>Discover our best seller Pizzas, You will never have enough.</h2>
          <img src="hero.jpeg" />
        </StyledAd>
      </StyledPayment>
    </>
  );
}

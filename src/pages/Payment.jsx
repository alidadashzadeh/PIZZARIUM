import { styled } from "styled-components";
import OrderSummary from "../features/order/OrderSummary";
import PaymentForm from "../ui/PaymentForm";
import Process from "../features/order/Process";

const StyledPayment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
`;
const OrderDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  font-size: 20px;
  padding: 2rem;
  border-bottom: 1px solid #000;
`;

export default function Payment() {
  return (
    <>
      <Process step="payment" />
      <OrderDetails>
        <div>Order # 1234</div>
        <div>Date:{new Date().toISOString().substring(0, 10)}</div>
      </OrderDetails>
      <StyledPayment>
        <OrderSummary />
        <PaymentForm />
      </StyledPayment>
    </>
  );
}

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { Row } from "../../ui/Row";
import { Button } from "../../ui/Button";
import { totalOrderCost } from "../../utils/orderCalculations";
import { useNavigate } from "react-router-dom";

const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 1rem 2rem;
  border-left: 2px solid var(--color-grey-200);

  & span {
    font-size: 18px;
  }
`;

function OrderSummary({ step }) {
  const { order: currentOrder } = useOrder();
  const navigate = useNavigate();
  const totalPrice = totalOrderCost(currentOrder);

  function handleClick() {
    if (step === "cart") navigate("/deliveryInfo");
    if (step === "delivery") navigate("/payment");
  }

  return (
    <StyledOrderSummary>
      <h2>Order Summary</h2>
      <Row>
        <span>Item(s) total:</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </Row>
      <Row>
        <span>Delivery Fee:</span>
        <span>Free</span>
      </Row>
      <Row>
        <span>Estimated GST/HST:</span>
        <span>{(totalPrice * 0.13).toFixed(2)}</span>
      </Row>
      <Row>
        <span>Order Total:</span>
        <span>{(totalPrice * 1.13).toFixed(2)} $</span>
      </Row>

      <Button onClick={handleClick}>
        <span>{step === "cart" ? "Next (Delivery)" : "Next (Payment)"}</span>
      </Button>
    </StyledOrderSummary>
  );
}

export default OrderSummary;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { Row } from "../../ui/Row";
import { Button } from "../../ui/Button";
import { totalOrderCost } from "../../utils/orderCalculations";
import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import toast from "react-hot-toast";

const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid var(--color-secondary);
  border-radius: var(--border-radius-large);

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const H3 = styled.h3`
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 1rem;
`;
const Strong = styled.strong`
  font-size: 14px;
  font-weight: 400;
`;

function OrderSummary({ step }) {
  const { order: currentOrder, selectedAddress } = useOrder();
  const { user } = useUser();
  const navigate = useNavigate();
  const totalPrice = totalOrderCost(currentOrder);

  function handleClick() {
    if (step === "cart") navigate("/deliveryInfo");
    if (step === "delivery" && user && selectedAddress) navigate("/payment");
    if (step === "delivery" && user && !selectedAddress) {
      toast.error("Please select An Address to proceed");
    }
    if (step === "delivery" && !user) {
      toast.error("Please Login");
    }
  }

  return (
    <StyledOrderSummary>
      <H3>Order Summary</H3>
      <Row>
        <span>Subtotal:</span>
        <span>$ {totalPrice.toFixed(2)}</span>
      </Row>
      <Row>
        <span>Delivery:</span>
        <span>Free</span>
      </Row>
      <Row>
        <span>Estimated GST/HST:</span>
        <span>$ {(totalPrice * 0.13).toFixed(2)}</span>
      </Row>
      <Row>
        <span>TOTAL:</span>
        <span>$ {(totalPrice * 1.13).toFixed(2)}</span>
      </Row>

      <Button onClick={handleClick}>
        {step === "cart" && (
          <span>
            Next (<Strong>Delivery</Strong>)
          </span>
        )}
        {/* go to payment only if there is a user logged in and an address selected */}
        {step === "delivery" && (
          <span>
            Next (<Strong>Payment</Strong>)
          </span>
        )}
      </Button>
    </StyledOrderSummary>
  );
}

export default OrderSummary;

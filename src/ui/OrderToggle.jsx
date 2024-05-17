import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

const StyledToggle = styled.div`
  position: relative;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Count = styled.span`
  position: absolute;
  top: -16px;
  right: -20px;
  background-color: var(--color-primary);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  color: var(--color-text-white);
`;
function OrderToggle() {
  const navigate = useNavigate();
  const { order } = useOrder();
  return (
    <StyledToggle onClick={() => navigate("/order")}>
      <Text>Cart</Text>
      <Count>{order.length}</Count>
    </StyledToggle>
  );
}

export default OrderToggle;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledIconMinus } from "./StyledIconMinus";
import { StyledIconPlus } from "./StyledIconPlus";
import { CountInput } from "./CountInput";
import { useOrder } from "../context/OrderContext";

const Counter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0;
`;

// if there is item it means it has been called from orderItem
// if there is no item it means it has been called from signaturePizza or createPizza or drink
function Count({ onPlusClick, onMinusClick, quantity, item }) {
  const { increaseQuantity, decreaseQuantity } = useOrder();

  function handleMinus() {
    decreaseQuantity(item.id);
  }

  function handlePlus() {
    increaseQuantity(item.id);
  }

  return (
    <Counter>
      <StyledIconMinus onClick={item ? handleMinus : onMinusClick} />
      <CountInput value={item ? item.quantity : quantity} />
      <StyledIconPlus onClick={item ? handlePlus : onPlusClick} />
    </Counter>
  );
}

export default Count;

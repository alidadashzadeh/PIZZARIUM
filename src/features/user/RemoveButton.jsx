/* eslint-disable react/prop-types */
import styled from "styled-components";

import { FaTrash } from "react-icons/fa6";
import { Button } from "../../ui/Button";
import { useOrder } from "../../context/OrderContext";

const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;
export default function RemoveButton({ item }) {
  const { removeItemFromOrder } = useOrder();

  return (
    <Button
      variation="secondary"
      size="small"
      onClick={() => removeItemFromOrder(item.id)}
    >
      <ButtonFlex>
        <FaTrash />
        <span>Remove</span>
      </ButtonFlex>
    </Button>
  );
}

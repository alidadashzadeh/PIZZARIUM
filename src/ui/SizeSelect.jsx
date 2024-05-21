/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import { Button } from "./Button";

const SizeFlex = styled.div`
  display: flex;
  gap: 16px;
`;

const SizeItem = styled.div`
  padding: 8px 32px;
  align-self: center;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid
    ${(props) =>
      !props.identified ? "var(--color-secondary)" : "var(--color-primary)"};
  color: ${(props) =>
    props.identified ? "var(--color-text-main)" : "var(--color-text-grey)"};

  & span {
    font-size: 16px;
  }
`;

function SizeSelect({ item, size, setSize }) {
  const { ChangeSize } = useOrder();
  return (
    <SizeFlex>
      <SizeItem
        identified={item.selectedSize === "small" || size === "small"}
        onClick={() =>
          setSize ? setSize("small") : ChangeSize(item.id, "small")
        }
      >
        <span>Small</span>
      </SizeItem>
      <SizeItem
        identified={item.selectedSize === "medium" || size === "medium"}
        onClick={() =>
          setSize ? setSize("medium") : ChangeSize(item.id, "medium")
        }
      >
        <span>Medium</span>
      </SizeItem>
      <SizeItem
        identified={item.selectedSize === "large" || size === "large"}
        onClick={() =>
          setSize ? setSize("large") : ChangeSize(item.id, "large")
        }
      >
        <span>Large</span>
      </SizeItem>
    </SizeFlex>
  );
}

export default SizeSelect;

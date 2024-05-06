/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../context/OrderContext";

const Select = styled.select`
  border: none;
  outline: none;
  background-color: var(--color-primary);
  border-radius: 50px;
  padding: 1rem 2rem;
`;

function SizeSelect({ item }) {
  const { ChangeSize } = useOrder();
  return (
    <Select
      name="SelectedSize"
      id="size"
      defaultValue={item.selectedSize}
      onChange={(e) => ChangeSize(item.id, e.target.value)}
    >
      <option value="small">Sm: ${item.price.small}</option>
      <option value="medium">Md: ${item.price.medium}</option>
      <option value="large">Lg: ${item.price.large}</option>
    </Select>
  );
}

export default SizeSelect;

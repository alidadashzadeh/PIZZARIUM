/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../context/OrderContext";

const Select = styled.select`
	border: none;
	outline: none;
	background-color: var(--color-yellow-300);
	border-radius: 5px;
	padding: 0.25rem 0.5rem;
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
			<option value="extraLarge">XL: ${item.price.extraLarge}</option>
			<option value="partySize">prty: ${item.price.partySize}</option>
		</Select>
	);
}

export default SizeSelect;

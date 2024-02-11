/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import { useState } from "react";
import styled, { css } from "styled-components";
import { useOrder } from "../context/context";
import Count from "./Count";
import Button from "./Button";

const StyledPopup = styled.div`
	opacity: 0.8;
	padding: 1rem;
	z-index: 1000;
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: var(--color-yellow-100);
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const SizeSelect = styled.button`
	padding: 0.5rem 1rem;
	border-radius: 5px;
	border: 1px solid var(--color-yellow-700);

	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;

const StyledSizeSelect = styled(Button)`
	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;

const TotalPrice = styled.div`
	text-align: center;
`;

const AddButton = styled(Button)`
	display: block;
	margin: 0 auto;
`;

function AddPopup({ pizza }) {
	const { addToOrder } = useOrder();

	const [quantity, setQuantity] = useState(0);
	const [selectedSize, setSelectedSize] = useState("small");
	const { name, details, Veggie, picture, price } = pizza;

	function handleAddToOrder() {
		const newItem = {
			title: name,
			details,
			price,
			quantity,
			picture,
			selectedSize,
			id: Date.now(),
			Veggie,
			isSignaturePizza: true,
			isCustomPizza: false,
		};

		addToOrder(newItem);
	}

	function handePlusQuantity() {
		setQuantity((s) => s + 1);
	}

	function handeMinusQuantity() {
		setQuantity((s) => (s > 1 ? s - 1 : s));
	}
	return (
		<StyledPopup>
			<Buttons>
				<StyledSizeSelect
					variation={"secondary"}
					size={"small"}
					selected={selectedSize === "small"}
					onClick={() => setSelectedSize("small")}
				>
					Small: ${price.small} - 6 Slices
				</StyledSizeSelect>
				<StyledSizeSelect
					variation={"secondary"}
					size={"small"}
					selected={selectedSize === "medium"}
					onClick={() => setSelectedSize("medium")}
				>
					Medium: ${price.medium} - 8 Slices
				</StyledSizeSelect>
				<StyledSizeSelect
					variation={"secondary"}
					size={"small"}
					selected={selectedSize === "large"}
					onClick={() => setSelectedSize("large")}
				>
					Large: ${price.large} - 10 Slices
				</StyledSizeSelect>
				<StyledSizeSelect
					variation={"secondary"}
					size={"small"}
					selected={selectedSize === "extraLarge"}
					onClick={() => setSelectedSize("extraLarge")}
				>
					extra Large: ${price.extraLarge} - 12 Slices
				</StyledSizeSelect>
				<StyledSizeSelect
					variation={"secondary"}
					size={"small"}
					selected={selectedSize === "partySize"}
					onClick={() => setSelectedSize("partySize")}
				>
					party Size: ${price.partySize} - 24 Slices
				</StyledSizeSelect>
			</Buttons>
			<Count
				onPlusClick={handePlusQuantity}
				onMinusClick={handeMinusQuantity}
				quantity={quantity}
			/>
			<TotalPrice>Total: ${quantity * price[selectedSize]}</TotalPrice>
			<AddButton onClick={handleAddToOrder}>ADD</AddButton>
		</StyledPopup>
	);
}

export default AddPopup;

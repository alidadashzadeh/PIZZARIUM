/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import { useState } from "react";
import styled, { css } from "styled-components";
import { useOrder } from "../context/context";

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
const Button = styled.button`
	padding: 0.5rem 1rem;
	border-radius: 5px;
	border: 1px solid var(--color-yellow-700);

	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;

const Count = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 0.5rem 0;
`;

const Input = styled.input`
	width: 24px;
	border-radius: 50px;
	border: none;
	outline: none;
	text-align: center;
`;
const StyledIconMinus = styled(CiCircleMinus)`
	font-size: 24px;
`;
const StyledIconPlus = styled(CiCirclePlus)`
	font-size: 24px;
`;

const TotalPrice = styled.div`
	text-align: center;
`;

const AddButton = styled.button`
	display: block;
	margin: 0 auto;
	width: 50%;
	text-align: center;
	background-color: var(--color-yellow-300);
	color: var(--color-grey-100);
	padding: 0.25rem 1rem;
	border-radius: 5px;

	&:hover {
		color: #fff;
		background-color: var(--color-yellow-700);
	}
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
	return (
		<StyledPopup>
			<Buttons>
				<Button
					selected={selectedSize === "small"}
					onClick={() => setSelectedSize("small")}
				>
					Small: ${price.small} - 6 Slices
				</Button>
				<Button
					selected={selectedSize === "medium"}
					onClick={() => setSelectedSize("medium")}
				>
					Medium: ${price.medium} - 8 Slices
				</Button>
				<Button
					selected={selectedSize === "large"}
					onClick={() => setSelectedSize("large")}
				>
					Large: ${price.large} - 10 Slices
				</Button>
				<Button
					selected={selectedSize === "extraLarge"}
					onClick={() => setSelectedSize("extraLarge")}
				>
					extra Large: ${price.extraLarge} - 12 Slices
				</Button>
				<Button
					selected={selectedSize === "partySize"}
					onClick={() => setSelectedSize("partySize")}
				>
					party Size: ${price.partySize} - 24 Slices
				</Button>
			</Buttons>
			<Count>
				<StyledIconMinus
					onClick={() => setQuantity((s) => (s > 0 ? s - 1 : s))}
				/>
				<Input value={quantity} />
				<StyledIconPlus onClick={() => setQuantity((s) => s + 1)} />
			</Count>
			<TotalPrice>Total: ${quantity * price[selectedSize]}</TotalPrice>
			<AddButton onClick={handleAddToOrder}>ADD</AddButton>
		</StyledPopup>
	);
}

export default AddPopup;

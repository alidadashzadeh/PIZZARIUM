/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Count from "../../ui/Count";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";

const StyledDrinkItem = styled.li`
	flex-basis: 220px;
	/* flex-grow: 1; */
	border: 2px solid var(--color-yellow-700);
	border-radius: 15px;
	overflow: hidden;
	padding-bottom: 1rem;
`;

const Img = styled.img`
	width: 100%;
	aspect-ratio: 1;
`;
const DrinkDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Row = styled.div`
	display: flex;
	gap: 1rem;
	margin: 0.2rem 0;
`;

const Button = styled.button`
	border: 1px solid var(--color-yellow-700);
	border-radius: 5px;
	padding: 0 2rem;
	background-color: transparent;

	&:hover {
		background-color: var(--color-yellow-700);
	}
`;

function DrinkItem({ drink }) {
	const [quantity, setQuantity] = useState(1);
	const { addOrderDrink } = useOrder();

	function handePlusQuantity() {
		setQuantity((s) => s + 1);
	}

	function handeMinusQuantity() {
		setQuantity((s) => (s > 1 ? s - 1 : s));
	}

	function handleAddDrink() {
		const newDrink = {
			title: drink.name,
			quantity,
			picture: drink.picture,
			calorie: drink.calorie,
			price: (quantity * drink.price).toFixed(2),
			isDrink: true,
		};

		addOrderDrink(newDrink);
	}
	return (
		<StyledDrinkItem>
			<Img src={drink.picture} />
			<DrinkDetails>
				<Row>
					<span>{drink.name}</span>
					<span>Calorie: {drink.calorie}</span>
				</Row>
				<Row>
					<span>
						Size: {drink.size}
						{drink.unit}
					</span>
					Price: <strong>{drink.price}$</strong>
				</Row>
				<Row>
					<Count
						onPlusClick={handePlusQuantity}
						onMinusClick={handeMinusQuantity}
						quantity={quantity}
					/>
					<Button onClick={handleAddDrink}>Add</Button>
				</Row>
			</DrinkDetails>
		</StyledDrinkItem>
	);
}

export default DrinkItem;

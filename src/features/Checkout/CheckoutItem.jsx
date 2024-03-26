/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { StyledChef } from "../../ui/StyledChef";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { CountInput } from "../../ui/CountInput";
import SizeSelect from "../../ui/SizeSelect";
import Recipe from "../createPizza/Recipe";

const StyledOrderItem = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	padding: 2rem 0.5rem;
	border-bottom: 1px solid var(--color-grey-300);
`;

const OrderImage = styled.div`
	width: 10%;
	border-radius: 15px;
	overflow: hidden;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`;

const Button = styled.button`
	position: absolute;
	top: 10%;
	right: 10%;
	width: 20px;
	height: 20px;
	border-radius: 100px;
	background-color: var(--color-yellow-300);
	color: #fff;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.1);
		background-color: var(--color-yellow-700);
	}
`;

const Count = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 0.5rem 0;
	//
`;

function CheckoutItem({ item }) {
	const { increaseQuantity, decreaseQuantity, removeItemFromOrder } =
		useOrder();
	return (
		<>
			<StyledOrderItem>
				<OrderImage>
					{item.isCustomPizza ? <StyledChef /> : <img src={item.picture} />}
				</OrderImage>
				<Details>
					{item.title}

					{!item.isDrink && <SizeSelect item={item} />}

					{item.isDrink && <span>Price: ${item.price}</span>}

					<Count>
						<StyledIconMinus onClick={() => decreaseQuantity(item.id)} />
						<CountInput value={item.quantity} />
						<StyledIconPlus onClick={() => increaseQuantity(item.id)} />
					</Count>

					<Button onClick={() => removeItemFromOrder(item.id)}>&#x2716;</Button>
				</Details>
				{item.isCustomPizza && <Recipe customPizza={item} />}
			</StyledOrderItem>
		</>
	);
}

export default CheckoutItem;

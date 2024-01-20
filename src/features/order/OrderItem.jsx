/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useOrder } from "../../context/context";

const StyledOrderItem = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	padding: 2rem 0.5rem;
	border-bottom: 1px solid var(--color-grey-300);
`;

const OrderImage = styled.div`
	width: 30%;
	border-radius: 15px;
	overflow: hidden;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`;

const Select = styled.select`
	border: none;
	outline: none;
	background-color: var(--color-yellow-300);
	border-radius: 5px;
	padding: 0.25rem 0.5rem;
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
	cursor: pointer;
`;
const StyledIconPlus = styled(CiCirclePlus)`
	font-size: 24px;
	cursor: pointer;
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

function OrderItem({ item }) {
	const {
		increaseQuantity,
		decreaseQuantity,
		ChangeSize,
		removeItemFromOrder,
	} = useOrder();
	return (
		<>
			<StyledOrderItem>
				<OrderImage>
					<img src={item.picture} />
				</OrderImage>
				<Details>
					{item.title}
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
					<Count>
						<StyledIconMinus onClick={() => decreaseQuantity(item.id)} />
						<Input value={item.quantity} />
						<StyledIconPlus onClick={() => increaseQuantity(item.id)} />
					</Count>
					<Button onClick={() => removeItemFromOrder(item.id)}>&#x2716;</Button>
				</Details>
			</StyledOrderItem>
		</>
	);
}

export default OrderItem;

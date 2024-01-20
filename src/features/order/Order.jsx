import styled from "styled-components";
import { useOrder } from "../../context/context";
import OrderItem from "./OrderItem";

const StyledOrder = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 26rem;
	min-height: 100vh;
	border-left: 1px solid var(--color-grey-400);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
`;

const OrderFooter = styled.div`
	font-size: 18px;
	padding: 1rem 0;
	margin: 0 auto;
	margin-top: auto;
`;

function Order() {
	const { order: currentOrder } = useOrder();
	return (
		<StyledOrder>
			{currentOrder?.map((el) => (
				<OrderItem key={el.id} item={el} />
			))}
			<OrderFooter>
				<span>total Balance: </span>
				<span>
					{currentOrder.length === 0
						? "zero balance"
						: currentOrder
								.reduce(function (total, cur) {
									return total + cur.quantity * cur.price[cur.selectedSize];
								}, 0)
								.toFixed(2)}
				</span>
				<span> $</span>
			</OrderFooter>
		</StyledOrder>
	);
}

export default Order;

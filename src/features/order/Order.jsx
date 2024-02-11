import styled from "styled-components";
import { useOrder } from "../../context/context";
import OrderItem from "./OrderItem";
import OrderFooter from "./OrderFooter";

const StyledOrder = styled.div`
	min-height: 100vh;
	border-left: 1px solid var(--color-grey-400);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		display: none;
	}
`;

function Order() {
	const { order: currentOrder } = useOrder();
	return (
		<StyledOrder>
			{currentOrder?.map((el) => {
				return <OrderItem key={el.id} item={el} />;
			})}

			<OrderFooter />
		</StyledOrder>
	);
}

export default Order;

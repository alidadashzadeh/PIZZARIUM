import styled from "styled-components";
import OrderSummary from "../order/OrderSummary";
import CheckoutDeliveryInfo from "./CheckoutDeliveryInfo";
import { Button } from "../../ui/Button";
import OrderHistory from "../order/OrderHistory";
import { useCreateOrder } from "../order/useCreateOrder";
import { useOrder } from "../../context/OrderContext";

const StyledCheckoutSummary = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-left: 1px solid var(--color-yellow-700);
`;
function CheckoutSummary() {
	const { order } = useOrder();
	const { createOrder } = useCreateOrder();
	return (
		<StyledCheckoutSummary>
			<OrderHistory />
			<CheckoutDeliveryInfo />
			<OrderSummary />
			<Button
				variation="primary"
				size="large"
				onClick={() => {
					createOrder(order);
				}}
			>
				Submit Order
			</Button>
		</StyledCheckoutSummary>
	);
}

export default CheckoutSummary;

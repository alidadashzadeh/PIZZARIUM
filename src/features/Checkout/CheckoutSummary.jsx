import styled from "styled-components";
import OrderSummary from "../order/OrderSummary";
import CheckoutDeliveryInfo from "./CheckoutDeliveryInfo";
import Button from "../../ui/Button";

const StyledCheckoutSummary = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-left: 1px solid var(--color-yellow-700);
`;
function CheckoutSummary() {
	return (
		<StyledCheckoutSummary>
			<CheckoutDeliveryInfo />
			<OrderSummary />
			<Button variation="primary" size="large">
				Submit Order
			</Button>
		</StyledCheckoutSummary>
	);
}

export default CheckoutSummary;

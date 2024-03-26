import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { Row } from "../../ui/Row";
import { totalOrderCost } from "../../utils/orderCalculations";

const StyledOrderSummary = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

function OrderSummary() {
	const { order: currentOrder } = useOrder();
	const totalPrice = totalOrderCost(currentOrder);
	return (
		<StyledOrderSummary>
			<h3>Order Summary</h3>
			<Row>
				<span>Item(s) total:</span>
				<span>{totalPrice.toFixed(2)} $</span>
			</Row>
			<Row>
				<span>Shipping:</span>
				<span>Free</span>
			</Row>
			<Row>
				<span>Estimated GST/HST:</span>
				<span>{(totalPrice * 0.13).toFixed(2)}</span>
			</Row>
			<Row>
				<span>Order Total:</span>
				<span>{(totalPrice * 1.13).toFixed(2)}</span>
			</Row>
		</StyledOrderSummary>
	);
}

export default OrderSummary;

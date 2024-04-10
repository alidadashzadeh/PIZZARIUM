import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledOrderFooter = styled.div`
	font-size: 18px;
	padding: 1rem 0;
	margin: 0 auto;
	margin-top: auto;
`;

const CheckoutButton = styled(Button)`
	display: block;
	margin: 0 auto;
`;

function OrderFooter() {
	const navigate = useNavigate();
	const { order: currentOrder } = useOrder();
	return (
		<StyledOrderFooter>
			<div>
				<span>total Balance: </span>
				<span>
					{currentOrder.length === 0
						? "zero balance"
						: currentOrder
								.reduce(function (total, cur) {
									return cur.isDrink
										? total + cur.quantity * cur.price
										: total + cur.quantity * cur.price[cur.selectedSize];
								}, 0)
								.toFixed(2)}
				</span>
				<span> $</span>
			</div>
			<CheckoutButton
				variation={"primary"}
				size={"large"}
				onClick={() => navigate("./checkout")}
			>
				Checkout
			</CheckoutButton>
		</StyledOrderFooter>
	);
}

export default OrderFooter;

import styled from "styled-components";
import Sidebar from "../features/sidebar/Sidebar";
import { useOrder } from "../context/OrderContext";
import CheckoutItem from "../features/Checkout/CheckoutItem";
import CheckoutSummary from "../features/Checkout/CheckoutSummary";

const StyledCheckout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr 38rem;
	grid-template-rows: auto 1fr;
	height: 100vh;
`;
const Main = styled.main`
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

function Checkout() {
	const { order: currentOrder } = useOrder();

	return (
		<StyledCheckout>
			<Sidebar />
			<Main>
				{currentOrder?.map((el) => {
					return <CheckoutItem key={el.id} item={el} />;
				})}
			</Main>
			<CheckoutSummary />
		</StyledCheckout>
	);
}

export default Checkout;

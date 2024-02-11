import styled from "styled-components";
import Sidebar from "../features/sidebar/Sidebar";
import Order from "../features/order/Order";

const StyledCheckout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
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
	return (
		<StyledCheckout>
			<Sidebar />
			<Main>
				<Order />
			</Main>
		</StyledCheckout>
	);
}

export default Checkout;

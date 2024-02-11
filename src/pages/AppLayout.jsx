import styled from "styled-components";
import Modal from "../ui/Modal";
import Sidebar from "../features/sidebar/Sidebar";
import Order from "../features/order/Order";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
	display: grid;
	height: 100vh;
	grid-template-columns: 28rem 1fr 26rem;
	grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Container = styled.div`
	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

function AppLayout() {
	const isModalOpen = false;
	return (
		<>
			<StyledAppLayout>
				<Sidebar />
				<Main>
					<Outlet />
				</Main>
				<Container>
					<Order />
				</Container>
				{isModalOpen && <Modal />}
			</StyledAppLayout>
		</>
	);
}

export default AppLayout;

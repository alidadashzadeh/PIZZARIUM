import styled from "styled-components";
import Modal from "../ui/Modal";
import Sidebar from "../features/sidebar/Sidebar";
import Order from "../features/order/Order";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 26rem;
	margin-left: 28rem;
`;

const Main = styled.main`
	background-color: var(--color-yellow-100);
	min-height: 110vh;
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
				<Order />
				{isModalOpen && <Modal />}
			</StyledAppLayout>
		</>
	);
}

export default AppLayout;

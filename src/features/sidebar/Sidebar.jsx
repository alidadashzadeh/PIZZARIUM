import styled from "styled-components";
import Logo from "../../ui/Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StyledSidebar = styled.aside`
	width: 28rem;
	height: 100vh;
	background-color: var(--color-yellow-100);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<Logo />

			<Navbar />

			<Footer />
		</StyledSidebar>
	);
}

export default Sidebar;

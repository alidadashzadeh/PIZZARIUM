import styled from "styled-components";
import Logo from "../../ui/Logo";
import SidebarFooter from "./SidebarFooter";

const StyledSidebar = styled.aside`
	grid-row: 1 / -1;
	background-color: var(--color-yellow-100);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<Logo />

			<SidebarFooter />
		</StyledSidebar>
	);
}

export default Sidebar;

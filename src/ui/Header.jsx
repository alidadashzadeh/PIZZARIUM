import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

const StyledHeader = styled.div`
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function Header() {
	return (
		<StyledHeader>
			<Logo />

			<Navbar />

			<UserInfo />
		</StyledHeader>
	);
}

export default Header;

import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import OrderToggle from "../ui/OrderToggle";

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
      <OrderToggle />
      <UserInfo />
    </StyledHeader>
  );
}

export default Header;

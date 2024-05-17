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

const FlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  padding-right: 64px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <FlexItem>
        <OrderToggle />
        <UserInfo />
      </FlexItem>
    </StyledHeader>
  );
}

export default Header;

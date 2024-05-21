import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import ShoppingCartButton from "./ShoppingCartButton";

const StyledHeader = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
        <ShoppingCartButton />
        <UserInfo />
      </FlexItem>
    </StyledHeader>
  );
}

export default Header;

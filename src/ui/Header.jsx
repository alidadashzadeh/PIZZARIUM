import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import ShoppingCartButton from "./ShoppingCartButton";
import BurgerMenu from "./BurgerMenu";

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

  @media screen and (max-width: 1024px) {
    gap: 16px;
    padding-right: 32px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <BurgerMenu />

      <FlexItem>
        <Navbar />
        <ShoppingCartButton />
        <UserInfo />
      </FlexItem>
    </StyledHeader>
  );
}

export default Header;

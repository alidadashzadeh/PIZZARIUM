import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-text-main);
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
  }
`;

const NavText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

function Navbar() {
  return (
    <StyledNav>
      <NavList className="nav__list">
        <li>
          <StyledNavlink to="/home">
            <NavText>HOME</NavText>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/signature-pizzas">
            <NavText>SIGNATURE PIZZA</NavText>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/create-your-pizza">
            <NavText>CREATE PIZZA</NavText>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/drinks">
            <NavText>DRINKS</NavText>
          </StyledNavlink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default Navbar;

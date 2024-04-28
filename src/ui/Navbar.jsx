import { BsCupStraw } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: var(--color-secondary);
    /* color: var(--color-primary); */
    padding: 1.2rem 2.4rem;
  }

  &:hover {
    background-color: var(--color-yellow-100);
  }
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
    background-color: var(--color-yellow-100);
  }

  & svg {
    font-size: 36px;
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
          <StyledNavlink to="/signature-pizzas">
            <GiFullPizza />
            <NavText>SIGNATURE PIZZA</NavText>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/create-your-pizza">
            <LuChefHat />
            <NavText>CREATE PIZZA</NavText>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/drinks">
            <BsCupStraw />
            <NavText>DRINKS</NavText>
          </StyledNavlink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default Navbar;

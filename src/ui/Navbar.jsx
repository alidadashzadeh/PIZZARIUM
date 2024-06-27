import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Dot } from "./Dot";

const StyledNav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  transition: all 0.3s ease;

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledNavlink = styled(NavLink)`
  position: relative;
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

const navOptions = [
  { label: "Home", path: "/home" },
  { label: "Signature Pizza", path: "/signature-pizzas" },
  { label: "Create Pizza", path: "/create-your-pizza" },
  { label: "Drinks", path: "/drinks" },
];

function Navbar() {
  const location = useLocation();

  return (
    <StyledNav>
      <NavList className="nav__list">
        {navOptions.map((el) => (
          <li key={el.label}>
            <StyledNavlink to={el.path}>
              <NavText>{el.label}</NavText>
              {location.pathname === el.path && (
                <Dot as={motion.div} layoutId="navdott" />
              )}
            </StyledNavlink>
          </li>
        ))}
      </NavList>
    </StyledNav>
  );
}

export default Navbar;

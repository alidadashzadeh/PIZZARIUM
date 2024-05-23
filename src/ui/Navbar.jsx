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
  { label: "HOME", path: "/home" },
  { label: "SIGNATURE PIZZA", path: "/signature-pizzas" },
  { label: "CREATE PIZZA", path: "/create-your-pizza" },
  { label: "DRINKS", path: "/drinks" },
];

function Navbar() {
  const location = useLocation();

  console.log(location.pathname.slice(1));

  return (
    <StyledNav>
      <NavList className="nav__list">
        {navOptions.map((el) => (
          <li key={el.label}>
            <StyledNavlink to={el.path}>
              <NavText>{el.label}</NavText>
              {location.pathname === el.path && (
                <Dot as={motion.div} layoutId="navdot" />
              )}
            </StyledNavlink>
          </li>
        ))}
      </NavList>
    </StyledNav>
  );
}

export default Navbar;

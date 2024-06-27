/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";
import { Dot } from "./Dot";

const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItemList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.4s;
  color: ${(props) => props.selected && "var(--color-primary)"};
  margin-left: ${(props) => props.selected && "8px"};

  @media screen and (max-width: 768px) {
    border-radius: 15px;
    color: ${(props) => props.selected && "var(--color-text-white)"};
    background-color: ${(props) => props.selected && "var(--color-primary)"};
    padding: 0.5rem;
    font-size: 18px;
    margin-left: 0;
  }
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 1rem;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-grey-300);

  @media screen and (max-width: 768px) {
    border-bottom: none;
    margin: 0;
    padding-bottom: 0;
    font-size: 22px;
  }
`;

export default function NavigationList({
  options,
  label,
  selected,
  setSelected,
}) {
  return (
    <StyledNavigationList>
      <H2>{label}</H2>
      <NavItemList>
        {options.map((el) => (
          <NavItem
            selected={selected === el.value}
            onClick={() => setSelected(el.value)}
            key={el.value}
          >
            {el.label}
            {selected === el.value && (
              <Dot vertical={true} as={motion.div} layoutId={label} />
            )}
          </NavItem>
        ))}
      </NavItemList>
    </StyledNavigationList>
  );
}

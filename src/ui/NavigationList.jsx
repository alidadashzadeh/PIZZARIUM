/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.4s;
  color: ${(props) => props.selected && "var(--color-primary)"};
  margin-left: ${(props) => props.selected && "8px"};
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 1rem;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const Dot = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  width: 6px;
  aspect-ratio: 1;
  background-color: var(--color-primary);
  border-radius: 5px;
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
      {options.map((el) => (
        <NavItem
          selected={selected === el.value}
          onClick={() => setSelected(el.value)}
          key={el.value}
        >
          {el.label}
          {selected === el.value && <Dot as={motion.div} layoutId={label} />}
        </NavItem>
      ))}
    </StyledNavigationList>
  );
}
import styled from "styled-components";
import { motion } from "framer-motion";

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
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
`;
const FlexAlign = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

export default function ListOperation() {
  return (
    <NavigationList>
      {stepsOptions.map((el) => (
        <NavItem
          selected={selected === el.value}
          onClick={() => setSelected(el.value)}
          key={el.value}
        >
          {el.label}
          {selected === el.value && <Dot as={motion.div} layoutId="stepsdot" />}
        </NavItem>
      ))}
    </NavigationList>
  );
}

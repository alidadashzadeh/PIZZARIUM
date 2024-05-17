/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
`;
const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
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

function CreatePizzaNav({ selected, setSelected }) {
  return (
    <StyledNav>
      <H2>Steps</H2>
      <NavigationList>
        <NavItem
          selected={selected === "dough"}
          onClick={() => setSelected("dough")}
        >
          Dough
        </NavItem>
        <NavItem
          selected={selected === "crust"}
          onClick={() => setSelected("crust")}
        >
          Crust
        </NavItem>
        <NavItem
          selected={selected === "sauce"}
          onClick={() => setSelected("sauce")}
        >
          Sauce
        </NavItem>
        <NavItem
          selected={selected === "cheese"}
          onClick={() => setSelected("cheese")}
        >
          Cheese
        </NavItem>
        <NavItem
          selected={selected === "toppings"}
          onClick={() => setSelected("toppings")}
        >
          Toppings
        </NavItem>
        <NavItem
          selected={selected === "size&cook"}
          onClick={() => setSelected("size&cook")}
        >
          Cook
        </NavItem>
      </NavigationList>
    </StyledNav>
  );
}

export default CreatePizzaNav;

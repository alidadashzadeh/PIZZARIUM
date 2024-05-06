/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { css } from "styled-components";

const StyledCreatePizzaNav = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 1px solid var(--color-grey-300);
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 50px;

  background-color: ${(props) => props.selected && "#ddd"};
  margin-left: ${(props) => props.selected && "1rem"};

  &:hover {
    background-color: var(--color-yellow-300);
  }
`;

function CreatePizzaNav({ selected, setSelected }) {
  return (
    <StyledCreatePizzaNav>
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
    </StyledCreatePizzaNav>
  );
}

export default CreatePizzaNav;

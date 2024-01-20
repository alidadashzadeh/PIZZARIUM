import { useState } from "react";
import styled, { css } from "styled-components";

const StyledCreatePizzaNav = styled.div`
	display: flex;
	flex-direction: column;
`;

const H1 = styled.h1``;

const NavigationList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	border: 2px solid var(--color-yellow-300);
	border-radius: 10px;
`;

const NavItem = styled.li`
	padding: 1rem 2rem;
	cursor: pointer;
	transition: all 0.5s;
	flex-grow: 1;
	text-align: center;

	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-300);
		`}
`;

function CreatePizzaNav() {
	const [selected, setSelected] = useState("dough");
	return (
		<StyledCreatePizzaNav>
			<H1>CREATE YOUR OWN STYLE PIZZA</H1>
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
					selected={selected === "cook"}
					onClick={() => setSelected("cook")}
				>
					Cook
				</NavItem>
			</NavigationList>
		</StyledCreatePizzaNav>
	);
}

export default CreatePizzaNav;

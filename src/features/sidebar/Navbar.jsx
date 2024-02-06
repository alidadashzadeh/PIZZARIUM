import { NavLink } from "react-router-dom";

import { BsCupStraw } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";

import styled from "styled-components";

const StyledNav = styled.nav`
	height: 80%;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	/* gap: 2rem; */
`;

const StyledNavlink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;
	}

	&:hover {
		background-color: var(--color-yellow-300);
	}
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-yellow-700);
	}

	& svg {
		font-size: 36px;
	}
`;

function Navbar() {
	return (
		<StyledNav>
			<NavList className="nav__list">
				<li>
					<StyledNavlink to="signature-pizzas">
						<GiFullPizza />
						<span>SIGNATURE PIZZAS</span>
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="create-your-pizza">
						<LuChefHat />
						<span>CREATE YOUR PIZZA</span>
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="drinks">
						<BsCupStraw />
						<span>DRINKS</span>
					</StyledNavlink>
				</li>
			</NavList>
		</StyledNav>
	);
}

export default Navbar;

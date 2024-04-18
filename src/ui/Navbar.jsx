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
		gap: 1.2rem;

		color: var(--color-primary);
		padding: 1.2rem 2.4rem;
	}

	&:hover {
		background-color: var(--color-yellow-100);
	}
	&:active,
	&.active:link,
	&.active:visited {
		border-bottom: 2px solid var(--color-primary);
	}

	& svg {
		font-size: 36px;
	}
`;

const NavText = styled.div`
	font-size: 20px;
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

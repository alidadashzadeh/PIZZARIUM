import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
	height: 80%;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
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

function UserSidebar() {
	return (
		<StyledNav>
			<NavList className="nav__list">
				<li>
					<StyledNavlink to="generalsettings">
						<span>Geeral Settings</span>
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="passwordsettings">
						<span>Password Settings</span>
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="addresssettings">
						<span>Address Settings</span>
					</StyledNavlink>
				</li>
				<li>
					<StyledNavlink to="ordersettings">
						<span>Orders</span>
					</StyledNavlink>
				</li>
			</NavList>
		</StyledNav>
	);
}

export default UserSidebar;

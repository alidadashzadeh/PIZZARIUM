import styled from "styled-components";

const StyledLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	height: 100%;
`;

const StyledImg = styled.img`
	border-radius: 50%;
	box-shadow: 10px 10px 20px 5px rgba(48, 40, 34, 0.2);
`;

const FlexItem = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoText = styled.div`
	font-size: 48px;
	font-weight: 700;
	color: var(--color-primary);
`;

const LogoNote = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: var(--color-secondary);
`;

function Logo() {
	return (
		<StyledLogo>
			<StyledImg src="logo.jpg" />
			<FlexItem>
				<LogoText>PIZZARIUM</LogoText>
				<LogoNote>a tasty one</LogoNote>
			</FlexItem>
		</StyledLogo>
	);
}

export default Logo;

import styled from "styled-components";

const StyledLogo = styled.div`
	font-size: 36px;
	color: orangered;
	font-family: "Dancing Script", sans-serif;
	font-weight: 700;
	cursor: pointer;
	display: flex;
	justify-content: center;
`;

const StyledImg = styled.img`
	max-width: 100%;
	height: auto;
`;

function Logo() {
	return (
		<StyledLogo>
			<StyledImg src="logo.jpg" />
		</StyledLogo>
	);
}

export default Logo;

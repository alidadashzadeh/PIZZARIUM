import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledImg = styled.img`
  width: 64px;
  aspect-ratio: 1;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
`;

const LogoNote = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-grey);
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledImg src="logo.png" />
      <FlexItem>
        <LogoText>PIZZARIUM</LogoText>
        <LogoNote>a tasty one</LogoNote>
      </FlexItem>
    </StyledLogo>
  );
}

export default Logo;

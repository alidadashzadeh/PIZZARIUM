import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  cursor: pointer;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  box-shadow: 10px 10px 20px 5px rgba(48, 40, 34, 0.2);
  width: 80px;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: var(--color-primary);
`;

const LogoNote = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--color-secondary);
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <StyledLogo onClick={() => navigate("/home")}>
      <StyledImg src="logo.jpg" />
      <FlexItem>
        <LogoText>PIZZARIUM</LogoText>
        <LogoNote>a tasty one</LogoNote>
      </FlexItem>
    </StyledLogo>
  );
}

export default Logo;

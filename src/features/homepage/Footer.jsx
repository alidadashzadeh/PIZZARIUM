import styled from "styled-components";
import Logo from "../../ui/Logo";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import FooterSocialMedia from "../../ui/FooterSocialMedia";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCupStraw } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import { Row } from "../../ui/Row";

const StyledFooter = styled.div`
  display: grid;
  padding: 6rem 4rem;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #000;
  /* margin-bottom: 1rem; */
`;

const FlexItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FlexItemRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: #1c1c1c;
    /* color: var(--color-primary); */
    padding: 1.2rem 2.4rem;
  }
`;

const NavText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1c1c1c;
`;

const SmallText = styled.span`
  font-size: 12px;
  margin-bottom: 2rem;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <FlexItemColumn>
          <Logo />
          <span>
            Stay up to date on the latest features and release by joining our
            newsletter.
          </span>
          <FlexItemRow>
            <Input placeholder="Enter your email" />
            <Button size="large">Subscribe</Button>
          </FlexItemRow>
          <SmallText>
            By clicking Subscribe button, you confirm that you agree to our
            Terms and conditions.
          </SmallText>
        </FlexItemColumn>
        <FlexItemColumn>
          <StyledNavlink to="/signature-pizzas">
            <GiFullPizza />
            <NavText>Signature Pizzas </NavText>
          </StyledNavlink>
          <StyledNavlink to="/create-your-pizza">
            <LuChefHat />
            <NavText>Create Your Pizza</NavText>
          </StyledNavlink>
          <StyledNavlink to="/drinks">
            <BsCupStraw />
            <NavText>Drinks</NavText>
          </StyledNavlink>
        </FlexItemColumn>

        <FlexItemColumn>
          <FooterSocialMedia />
        </FlexItemColumn>
      </StyledFooter>
      <Row>
        <SmallText>
          <FaRegCopyright />
          2024 PIZZARIUM. All rights reserved.
        </SmallText>
        <FlexItemRow>
          <SmallText>Privacy Policy</SmallText>
          <SmallText>Terms of Service</SmallText>
          <SmallText>Cookies Settings</SmallText>
        </FlexItemRow>
      </Row>
    </>
  );
}

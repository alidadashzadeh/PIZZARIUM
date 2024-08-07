import styled from "styled-components";
import Logo from "./Logo";
import { Input } from "./Input";
import { Button } from "./Button";
import FooterSocialMedia from "./FooterSocialMedia";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.div`
  display: grid;
  padding: 2rem 4rem;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #000;
  align-items: center;
  grid-column: 1/-1;
  background-color: var(--color-grey-100);
  gap: 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FlexItemColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-row: 1;
    grid-column: 1/-1;
  }
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

const NavText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Rights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding: 4px;
  grid-column: 1/-1;
  border-top: 1px solid var(--color-grey-300);
`;
const SmallText = styled.span`
  font-size: 14px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FlexItemColumn1>
        <Logo />
        <span>
          Stay up to date on the latest features and release by joining our
          newsletter.
        </span>
        <FlexItemRow>
          <Input placeholder="Enter your email" />
          <Button size="small">Subscribe</Button>
        </FlexItemRow>
        <SmallText>
          By clicking Subscribe button, you confirm that you agree to our Terms
          and conditions.
        </SmallText>
      </FlexItemColumn1>
      <FlexItemColumn>
        <h3>Links</h3>
        <NavLink to="/home">
          <NavText>Home</NavText>
        </NavLink>
        <NavLink to="/signature-pizzas">
          <NavText>Signature Pizzas </NavText>
        </NavLink>
        <NavLink to="/create-your-pizza">
          <NavText>Create Your Pizza</NavText>
        </NavLink>
        <NavLink to="/drinks">
          <NavText>Drinks</NavText>
        </NavLink>
      </FlexItemColumn>
      <FlexItemColumn>
        <FooterSocialMedia />
      </FlexItemColumn>
      <Rights>
        <SmallText>
          <FaRegCopyright />
          2024 PIZZARIUM. All rights reserved.
        </SmallText>
        <FlexItemRow>
          <SmallText>Privacy Policy</SmallText>
          <SmallText>Terms of Service</SmallText>
          <SmallText>Cookies Settings</SmallText>
        </FlexItemRow>
      </Rights>
    </StyledFooter>
  );
}

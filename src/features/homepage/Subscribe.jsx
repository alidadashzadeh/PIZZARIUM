import styled from "styled-components";
import { motion as m } from "framer-motion";

import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

const StyledSubscribe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 4rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 26px;
`;
const P = styled.p`
  font-size: 16px;
  line-height: 2rem;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const SmallText = styled.span`
  font-size: 12px;
`;
const Img = styled.img`
  width: 700px;
  border-radius: 50px;
`;

export default function Subscribe() {
  return (
    <StyledSubscribe>
      <Content>
        <div>
          <H2>Get Exclusive Offers and Updates</H2>
          <P>
            Subscribe to our newsletter for special offers and the latest
            updates
          </P>
        </div>
        <div>
          <FlexItem>
            <Input placeholder="Enter your email" />
            <Button size="large">Subscribe</Button>
          </FlexItem>
          <SmallText>
            By clicking Subscribe button, you confirm that you agree to our
            Terms and conditions.
          </SmallText>
        </div>
      </Content>
      <Img src="./offer.png" />
    </StyledSubscribe>
  );
}

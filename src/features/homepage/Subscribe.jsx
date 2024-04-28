import styled from "styled-components";
import { motion as m } from "framer-motion";

import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

const StyledSubscribe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 4rem;
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
  width: 500px;
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
      <Img src="https://cdn.dribbble.com/userupload/10735890/file/original-e5290dcea835e126a6ba9df2875504db.png?resize=2048x2046&vertical=center" />
    </StyledSubscribe>
  );
}

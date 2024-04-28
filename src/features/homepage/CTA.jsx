import styled from "styled-components";

import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";

const StyledCTA = styled.div`
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H2 = styled.h2`
  font-size: 26px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 2rem;
`;

export default function CTA() {
  return (
    <StyledCTA>
      <H2>
        Craving a slice of happiness delivered right to your doorstep? Look no
        further!
      </H2>
      <P>Explore our menu and order now!! let the pizza party begin!" 🍕🎉</P>

      <ButtonGroup>
        <Button>Order</Button>
        <Button variation="secondary">Menu</Button>
      </ButtonGroup>
    </StyledCTA>
  );
}

import styled from "styled-components";
import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";

const StyledHero = styled.div`
  width: 100%;
  padding: 6rem 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem;
`;

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <h1>Delicious Pizzas Delivered Right to Your Doorstep</h1>
        <p>
          Indulge in our mouth-watering signature pizzas made with finest
          ingredients. Order now and experience pizza perfection.
        </p>
        <ButtonGroup>
          <Button variation="primary" size="large">
            Order
          </Button>
          <Button variation="secondary">Customize</Button>
        </ButtonGroup>
      </Container>
      <div>
        <Img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" />
      </div>
    </StyledHero>
  );
}

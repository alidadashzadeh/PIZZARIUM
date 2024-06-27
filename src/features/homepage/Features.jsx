import styled from "styled-components";

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  text-align: center;
  position: relative;
  &::after {
    content: "";
    width: 25%;
    height: 2px;
    background-color: var(--color-grey-300);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Styledfeature = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--color-grey-100);
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 50px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: right;
  border-radius: 50px;
`;

const H2 = styled.h2`
  font-size: 26px;
`;
const P = styled.p`
  font-size: 16px;
  line-height: 2rem;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-primary);
    cursor: pointer;
  }
`;

export default function Features() {
  return (
    <FlexItem>
      <H1>We Are Proud for:</H1>
      <StyledFeatures>
        <Styledfeature>
          <Img src="/ingredients.jpg" />
          <H2>Fresh Ingredients Everyday</H2>
          <P>
            at PIZZARIUM, we pride ourselves on using only the freshest
            ingredients to create spendid pizzas. from our homemade dough to our
            hand-picked toppings, every bite is a burst of flavor.
          </P>
        </Styledfeature>
        <Styledfeature>
          <Img src="/create pizza.jpg" />
          <H2>Create Your Perfect Pizza</H2>
          <P>
            With PIZZARIUM's custom pizza creation, you have the freedom to
            choose your favorite toppings, sauces, and cheeses. Build your dream
            pizza and indulge in a personalized culinary experience.
          </P>
        </Styledfeature>
        <Styledfeature>
          <Img src="/delivery.png" />
          <H2>Fast Delivery Right to Your Doorstep</H2>
          <P>
            Our piping hot pizzas are just a click away. Whether you're in the
            mood for a classic Margherita or feeling adventurous with our
            specialty toppings, we've got you covered. With swift delivery and
            flavors that'll make your taste buds dance, why wait?
          </P>
        </Styledfeature>
      </StyledFeatures>
    </FlexItem>
  );
}

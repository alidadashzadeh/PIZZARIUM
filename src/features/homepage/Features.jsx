import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 4rem;
`;

const Styledfeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  aspect-ratio: 1;
  object-fit: cover;
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
      <H2>Discover Our Main Features</H2>
      <StyledFeatures>
        <Styledfeature>
          <Img src="https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <H2>Fresh Ingredients Everyday</H2>
          <P>
            at PIZZARIUM, we pride ourselves on using only the freshest
            ingredients to create spendid pizzas. from our homemade dough to our
            hand-picked toppings, every bite is a burst of flavor.
          </P>
          <StyledButton>
            <span>Learn More</span>
            <MdOutlineKeyboardArrowRight />
          </StyledButton>
        </Styledfeature>
        <Styledfeature>
          <Img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <H2>Create Your Perfect Pizza</H2>
          <P>
            With PIZZARIUM's custom pizza creation, you have the freedom to
            choose your favorite toppings, sauces, and cheeses. Build your dream
            pizza and indulge in a personalized culinary experience.
          </P>
          <StyledButton>
            <span>Start Creating</span>
            <MdOutlineKeyboardArrowRight />
          </StyledButton>
        </Styledfeature>
        <Styledfeature>
          <Img src="https://images.unsplash.com/photo-1622883618971-97068745dc6c?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <H2>Fast Delivery Right to Your Doorstep</H2>
          <P>
            Our piping hot pizzas are just a click away. Whether you're in the
            mood for a classic Margherita or feeling adventurous with our
            specialty toppings, we've got you covered. With swift delivery and
            flavors that'll make your taste buds dance, why wait?
          </P>
          <StyledButton>
            <span>Order Now</span>
            <MdOutlineKeyboardArrowRight />
          </StyledButton>
        </Styledfeature>
      </StyledFeatures>
    </FlexItem>
  );
}

import styled from "styled-components";
import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { HeroImages } from "../../ui/HeroImages";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StyledHero = styled.div`
  min-height: calc(100vh - 128px);
  width: 90%;
  margin: 0 auto;
  background-color: var(--color-grey-100);
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  width: clamp(600px, 60%, 900px);
  height: clamp(400px, 30%, 600px);
  background-color: var(--color-primary);
  border-radius: 500px;
  right: -15%;
  top: 0;
  position: absolute;
  transform: rotate(-45deg);

  @media screen and (max-width: 768px) {
    right: -30%;
  }

  &::after {
    content: "";
    height: calc(100% + 32px);
    width: calc(100% + 32px);
    border-radius: 500px;
    border: 4px solid var(--color-primary);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Img = styled.img`
  height: 100%;
  aspect-ratio: 1;
  position: absolute;
  left: 0;
  bottom: 0;
  filter: drop-shadow(4px 10px 10px rgba(0, 0, 0, 0.5));
`;

const WritingContainer = styled.div`
  width: 60%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    padding-top: 500px;
  }
`;

const H1 = styled.h1`
  line-height: 3rem;
  font-size: 42px;
  font-weight: 700;
  transition: all 0.2s ease;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 28px;
    line-height: 2.5rem;
  }
`;
const StyledSpan = styled.div`
  width: 80%;
  font-size: 18px;
`;

export default function Hero() {
  const navigate = useNavigate();
  return (
    <StyledHero>
      <Container
        as={motion.div}
        initial={{ opacity: 0, y: -100, x: 100, rotate: -45 }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
          rotate: -45,
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      >
        <Img src="/solo pizza.png" />
      </Container>

      <HeroImages img="/olive.png" selectedSize={56} right={50} top={400} />
      <HeroImages img="/olive.png" selectedSize={50} right={80} top={100} />
      <HeroImages
        img="/mushroom2.png"
        selectedSize={100}
        right={65}
        top={400}
      />
      <HeroImages
        img="/mushroom2.png"
        selectedSize={100}
        right={85}
        top={100}
      />
      <HeroImages img="/mushroom1.png" selectedSize={80} right={90} top={400} />
      <HeroImages img="/spinach.png" selectedSize={120} right={45} top={250} />
      <HeroImages
        img="/tomato slice 1.png"
        selectedSize={120}
        right={50}
        top={50}
      />
      <HeroImages
        img="/tomato slice 1.png"
        selectedSize={120}
        right={90}
        top={300}
      />

      <WritingContainer>
        <H1>Delicious Pizzas Delivered Right to Your Doorstep</H1>

        <StyledSpan>
          Indulge in our mouth-watering signature pizzas made with finest
          ingredients. Order now and experience pizza perfection.
        </StyledSpan>

        <ButtonGroup>
          <Button size="large" onClick={() => navigate("/signature-pizzas")}>
            Order Now
          </Button>
          <Button
            size="large"
            variation="secondary"
            onClick={() => navigate("/create-your-pizza")}
          >
            Create Pizza
          </Button>
        </ButtonGroup>
      </WritingContainer>
    </StyledHero>
  );
}

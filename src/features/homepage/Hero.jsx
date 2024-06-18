import styled from "styled-components";
import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { HeroImages } from "../../ui/HeroImages";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StyledHero = styled.div`
  height: calc(100vh - 128px);
  width: 90%;
  margin: 0 auto;
  background-color: var(--color-secondary);
  border-radius: 28px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 70%;
  height: 70%;
  background-color: var(--color-primary);
  border-radius: 500px;
  right: -196px;
  top: 0;
  position: absolute;
  transform: rotate(-45deg);
`;
const Highlight = styled.div`
  height: calc(100% + 32px);
  width: calc(100% + 32px);
  border-radius: 500px;
  border: 8px solid var(--color-primary);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  width: 65%;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const H1 = styled.h1`
  line-height: 4rem;
  font-size: 48px;
  font-weight: 700;
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
        <Highlight />
        <Img src="/solo pizza.png" />
      </Container>

      <HeroImages img="/olive.png" selectedSize={15} right={85} top={70} />
      <HeroImages img="/olive.png" selectedSize={10} right={15} top={20} />
      <HeroImages img="/mushroom2.png" selectedSize={20} right={75} top={70} />
      <HeroImages img="/mushroom2.png" selectedSize={30} right={15} top={0} />
      <HeroImages img="/mushroom1.png" selectedSize={15} right={10} top={70} />
      <HeroImages img="/spinach.png" selectedSize={15} right={60} top={75} />
      <HeroImages
        img="/tomato slice 1.png"
        selectedSize={30}
        right={50}
        top={60}
      />
      <HeroImages
        img="/tomato slice 1.png"
        selectedSize={20}
        right={30}
        top={10}
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

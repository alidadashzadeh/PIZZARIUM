import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeroImages = styled.img`
  width: ${(props) => props.selectedSize && props.selectedSize}px;
  position: absolute;
  left: ${(props) => props.right && props.right}%;
  top: ${(props) => props.top && props.top}px;

  filter: drop-shadow(4px 10px 10px rgba(0, 0, 0, 0.5));

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export function HeroImages({ img, selectedSize, right, top }) {
  return (
    <StyledHeroImages
      selectedSize={selectedSize}
      right={right}
      top={top}
      src={img}
      as={motion.img}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    />
  );
}

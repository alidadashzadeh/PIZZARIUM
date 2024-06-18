import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeroImages = styled.img`
  height: ${(props) => props.selectedSize && props.selectedSize}%;
  position: absolute;
  right: ${(props) => props.right && props.right}%;
  top: ${(props) => props.top && props.top}%;

  filter: drop-shadow(4px 10px 10px rgba(0, 0, 0, 0.5));
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

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const StyledDiv = styled.div`
  display: flex;
  height: 24px;
  overflow: hidden;
`;

const FlexItem = styled.div`
  position: relative;
  width: 24px;
`;
export default function Test({ value }) {
  let animatedValue = useSpring(value);

  useEffect(
    function () {
      animatedValue.set(value);
    },
    [animatedValue, value]
  );
  return (
    <StyledDiv>
      <FlexItem>
        {[...Array(10).keys()].map((i) => (
          <Number mv={animatedValue} number={i} key={i} />
        ))}
      </FlexItem>
    </StyledDiv>
  );
}

const StyledSpan = styled.span`
  position: absolute;
  inset: 0;
  line-height: 24px;
  display: flex;
  justify-content: center;
`;
function Number({ mv, number }) {
  let y = useTransform(mv, (latest) => {
    return 24 * (number - latest);
  });
  return (
    <StyledSpan as={motion.span} style={{ y }}>
      {number}
    </StyledSpan>
  );
}

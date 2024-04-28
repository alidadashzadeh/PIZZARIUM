/* eslint-disable react/prop-types */
import styled from "styled-components";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const StyledFaqItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  padding: 1rem 2rem;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.div`
  font-size: 12px;
  margin-left: 2rem;
`;

const ExpandIcon = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0ms.3 ease;

  &:hover {
    background-color: var(--color-grey-200);
    cursor: pointer;
  }
`;

export default function FaqItem({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <StyledFaqItem>
      <Question>
        <div>{question}</div>
        <ExpandIcon size="small" onClick={() => setShow((s) => !s)}>
          {show ? <FaMinus /> : <FaPlus />}
        </ExpandIcon>
      </Question>

      {show && <Answer>{answer}</Answer>}
    </StyledFaqItem>
  );
}

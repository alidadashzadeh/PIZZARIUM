/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-basis: 100%;
  height: ${(props) => props.fixedheight && "100px"};
`;

const Label = styled.label`
  font-size: 16px;
  white-space: nowrap;
`;

const Error = styled.div`
  font-size: 14px;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children, ...props }) {
  return (
    <StyledFormRow {...props}>
      {label ? <Label htmlFor={children.id}>{label}</Label> : null}
      {children}
      <AnimatePresence>
        {error ? (
          <Error
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </Error>
        ) : null}
      </AnimatePresence>
    </StyledFormRow>
  );
}

export default FormRow;

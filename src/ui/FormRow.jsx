/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 0.5rem;

  height: ${(props) => props.fixedHeight && "100px"};
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
      {error ? <Error>{error}</Error> : null}
    </StyledFormRow>
  );
}

export default FormRow;

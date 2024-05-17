/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 16px;
  padding: 0.5rem 2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-large);
  background-color: var(--color-grey-100);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {/* if there is no address, hint it in the select */}
      {options?.length === 0 ? (
        <option>No Address</option>
      ) : (
        options?.map((option) => (
          <option value={option?.value} key={option?.label}>
            {option.label}
          </option>
        ))
      )}
    </StyledSelect>
  );
}

export default Select;

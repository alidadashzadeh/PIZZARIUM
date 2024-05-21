import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 16px;
  &::file-selector-button {
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: 50px;
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-primary);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }
`;

export default FileInput;

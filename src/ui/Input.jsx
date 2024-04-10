import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid var(--color-yellow-100);
	outline: none;
	border-radius: 5px;
	padding: 1rem 2rem;
	padding-left: 4rem;

	&:focus {
		border: 1px solid var(--color-yellow-700);
	}
`;

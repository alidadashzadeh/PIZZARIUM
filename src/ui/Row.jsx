import styled, { css } from "styled-components";

export const Row = styled.div`
	display: flex;
	/* justify-content: space-between;
	align-items: center; */

	${(props) =>
		props.direction === "vertical" &&
		css`
			flex-direction: column;
		`}
`;

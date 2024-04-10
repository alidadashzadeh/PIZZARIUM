/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonRow = styled.div`
	display: flex;
	gap: 1rem;
	background-color: var(--color-grey-50);
	border: 1px solid var(--color-yellow-700);
	border-radius: 5px;
	box-shadow: var(--shadow-sm);
`;

const Button = styled.button`
	background-color: transparent;
	padding: 1rem 2rem;
	border-radius: 5px;
	flex-grow: 1;

	${(props) =>
		props.active &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;
function Operations({ field, options }) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleClick(value) {
		searchParams.set(field, value);
		setSearchParams(searchParams);
	}
	const currentFilter = searchParams.get(field) || options.at(0).value;
	return (
		<ButtonRow>
			{options.map((option) => (
				<Button
					active={option.value === currentFilter}
					onClick={() => handleClick(option.value)}
					key={option.label}
				>
					{option.label}
				</Button>
			))}
		</ButtonRow>
	);
}

export default Operations;

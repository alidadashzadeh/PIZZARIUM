/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledIconMinus } from "./StyledIconMinus";
import { StyledIconPlus } from "./StyledIconPlus";
import { CountInput } from "./CountInput";

const Counter = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 0.5rem 0;
	//
`;

function Count({ onPlusClick, onMinusClick, quantity }) {
	console.log(quantity);
	return (
		<Counter>
			<StyledIconMinus onClick={onMinusClick} />
			<CountInput value={quantity} />
			<StyledIconPlus onClick={onPlusClick} />
		</Counter>
	);
}

export default Count;

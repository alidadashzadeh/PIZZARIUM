/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Counter = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: 0.5rem 0;
	//
`;

const Input = styled.input`
	width: 24px;
	border-radius: 50px;
	border: none;
	outline: none;
	text-align: center;
`;
const StyledIconMinus = styled(CiCircleMinus)`
	font-size: 24px;
	cursor: pointer;
`;
const StyledIconPlus = styled(CiCirclePlus)`
	font-size: 24px;
	cursor: pointer;
`;

function Count({ onPlusClick, onMinusClick, quantity }) {
	return (
		<Counter>
			<StyledIconMinus onClick={onMinusClick} />
			<Input value={quantity} />
			<StyledIconPlus onClick={onPlusClick} />
		</Counter>
	);
}

export default Count;

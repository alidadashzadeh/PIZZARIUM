import { AiOutlineDollar } from "react-icons/ai";
import styled from "styled-components";

const StyledIcon = styled(AiOutlineDollar)`
	font-size: 24px;
	background-color: #fff;
	border-radius: 50px;
	fill: var(--color-yellow-700);
`;

function ExtraPriceSign() {
	return <StyledIcon />;
}

export default ExtraPriceSign;

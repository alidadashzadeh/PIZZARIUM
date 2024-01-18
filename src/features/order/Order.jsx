import styled from "styled-components";

const StyledOrder = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 26rem;
	min-height: 100vh;
	background-color: green;
`;

function Order() {
	return <StyledOrder>order</StyledOrder>;
}

export default Order;

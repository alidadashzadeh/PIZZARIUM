import styled from "styled-components";

const StyledCreatePizzaFooter = styled.div`
	height: 100px;
	background-color: red;
	position: fixed;
	margin-left: 28rem;
	bottom: 0;
	left: 0;
`;

function CreatePizzaFooter() {
	return <StyledCreatePizzaFooter>footer</StyledCreatePizzaFooter>;
}

export default CreatePizzaFooter;

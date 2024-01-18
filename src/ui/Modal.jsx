import styled from "styled-components";

const StyledModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: red;
	width: 100vw;
	height: 100vh;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Modal({ children }) {
	return <StyledModal>{children}dd</StyledModal>;
}

export default Modal;

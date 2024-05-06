import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import { useEffect } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

function Modal({ children }) {
  const { setToggleOrder } = useOrder();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <StyledModal>
      <Overlay onClick={() => setToggleOrder((s) => !s)}></Overlay>
      {children}
    </StyledModal>
  );
}

export default Modal;

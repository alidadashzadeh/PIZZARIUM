import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import ShoppingCartButton from "./ShoppingCartButton";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const StyledBurgerMenu = styled.div`
  padding-right: 16px;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Items = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 120px);
  left: 0;
  top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  padding: 1rem;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-grey-100);
    opacity: 0.9;
    z-index: -1;
  }
`;

const StyledRxHamburgerMenu = styled(RxHamburgerMenu)`
  font-size: 48px;
`;
const StyledIoClose = styled(IoClose)`
  font-size: 48px;
`;
const FlexItem = styled.div`
  display: flex;
  align-items: center;
`;

export default function BurgerMenu() {
  const [burgerOn, setBurgerOn] = useState(false);

  function handleClose() {
    setBurgerOn(false);
  }
  return (
    <StyledBurgerMenu>
      <ShoppingCartButton />
      {burgerOn ? (
        <StyledIoClose onClick={handleClose} />
      ) : (
        <StyledRxHamburgerMenu onClickCapture={() => setBurgerOn(true)} />
      )}
      <AnimatePresence>
        {burgerOn && (
          <Items
            as={motion.div}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, y: -100 }}
            key="navbarDD"
          >
            <FlexItem>
              <UserInfo />
            </FlexItem>
            <Navbar />
          </Items>
        )}
      </AnimatePresence>
    </StyledBurgerMenu>
  );
}

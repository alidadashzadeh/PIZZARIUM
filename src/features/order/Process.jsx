/* eslint-disable react/prop-types */
import styled from "styled-components";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StyledIconCart = styled(SlBasket)`
  font-size: 22px;
`;
const StyledIconDelivery = styled(MdOutlineDeliveryDining)`
  font-size: 22px;
`;
const StyledIconPayment = styled(MdPayment)`
  font-size: 22px;
`;

const StyledProcess = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  position: relative;

  /* &::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: red;
    position: absolute;
    z-index: -10;
    top: 25%;
  } */
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-grey-400);
  cursor: pointer;

  color: ${(props) => props.active && "var(--color-text-main)"};
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-text-grey);
  border-radius: 8px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export default function Process({ step }) {
  const navigate = useNavigate();

  return (
    <StyledProcess>
      <Items active={step === "cart"} onClick={() => navigate("/order")}>
        <Number>1</Number>
        <Details>
          <StyledIconCart />
          Cart
        </Details>
      </Items>
      <Items
        active={step === "delivery"}
        onClick={() => navigate("/deliveryInfo")}
      >
        <Number>2</Number>
        <Details>
          <StyledIconDelivery />
          Delivery Details
        </Details>
      </Items>
      <Items active={step === "payment"} onClick={() => navigate("/payment")}>
        <Number>3</Number>
        <Details>
          <StyledIconPayment />
          Payment
        </Details>
      </Items>
    </StyledProcess>
  );
}

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StyledIconCart = styled(SlBasket)`
  font-size: 20px;
`;
const StyledIconDelivery = styled(MdOutlineDeliveryDining)`
  font-size: 24px;
`;
const StyledIconPayment = styled(MdPayment)`
  font-size: 20px;
`;

const StyledProcess = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--color-grey-200);
    position: absolute;
    z-index: -10;
    top: 25%;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fff;
  color: var(--color-grey-400);
  cursor: pointer;

  color: ${(props) => props.active && "#1c1c1c"};
`;

const Number = styled.div`
  padding: 0.8rem 1.5rem;
  box-shadow: 1px 1px 4px 0px #000;
  border-radius: 10px;
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

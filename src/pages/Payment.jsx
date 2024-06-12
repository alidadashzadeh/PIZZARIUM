import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import PaymentForm from "../ui/PaymentForm";
import Process from "../features/order/Process";
import { useOrder } from "../context/OrderContext";
import { useEffect } from "react";
import PageTransition from "../ui/PageTransition";

const StyledPayment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const H2 = styled.h2`
  font-size: 20;
  font-weight: 700;
  padding: 1rem 2rem;
`;
const StyledAd = styled.div`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Payment() {
  const { selectedAddress } = useOrder();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!selectedAddress) navigate("/deliveryInfo");
    },
    [selectedAddress, navigate]
  );

  return (
    <PageTransition>
      <Process step="payment" />
      <H2>Payment Details</H2>
      <StyledPayment>
        <PaymentForm />
        <StyledAd>
          <h2>Discover our best seller Pizzas, You will never have enough.</h2>
          <img src="hero.jpeg" />
        </StyledAd>
      </StyledPayment>
    </PageTransition>
  );
}

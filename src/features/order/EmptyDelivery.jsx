import Process from "./Process";
import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import SignupForm from "../auth/SignupForm";

const StyledEmptyDelivery = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const H2 = styled.h2`
  font-size: 20;
  font-weight: 700;
  padding: 1rem 2rem;
`;
const StyledInfo = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  border-radius: 15px;
  border: 2px solid red;
  line-height: 1.3rem;
  padding: 1rem 2rem;
`;

export default function EmptyDelivery() {
  return (
    <>
      <Process step="delivery" />
      <H2>Delivery Details</H2>
      <StyledEmptyDelivery>
        <StyledInfo>
          <div>
            <Message>
              You have not signed in. Please sign in using your email and
              password
              <br /> OR <br />
              Register as new customer by filling out the form below
            </Message>
          </div>
          <SignupForm />
        </StyledInfo>
        {/* <div> */}
        <OrderSummary step="delivery" />
        {/* </div> */}
      </StyledEmptyDelivery>
    </>
  );
}

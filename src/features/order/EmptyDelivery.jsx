import Process from "./Process";
import styled from "styled-components";
import OrderSummary from "./OrderSummary";
import SignupForm from "../auth/SignupForm";

const StyledEmptyDelivery = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const H2 = styled.h2`
  font-size: 20;
  font-weight: 700;
  padding: 1rem 2rem;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  width: 55%;
  border-radius: 5px;
  border: 2px solid red;
  line-height: 1.3rem;
  margin: 0 auto;
  margin: 0 2rem;
  padding: 1rem 2rem;
`;
const SummaryContainer = styled.div``;

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
        <SummaryContainer>
          <OrderSummary step="delivery" />
        </SummaryContainer>
      </StyledEmptyDelivery>
    </>
  );
}

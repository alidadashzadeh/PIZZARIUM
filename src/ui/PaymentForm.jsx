import { styled, css } from "styled-components";
import FormRow from "./FormRow";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { FaArrowLeft } from "react-icons/fa";

const StyledPayment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--color-text-main);
  padding: 1rem 2rem;
  border-radius: 20px;
`;

const StyledCoupon = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 320px 148px 96px;
  gap: 8px;
`;
const StyledInput = styled.input`
  border: 1px solid var(--color-grey-700);
  outline: none;
  border-radius: var(--border-radius-small);
  height: 38px;
  padding: 1rem;
  letter-spacing: 2px;
  &:focus {
    border: 1px solid var(--color-primary);
  }

  &::placeholder {
    letter-spacing: 2px;
    text-align: center;
    color: var(--color-grey-300);
  }
`;
const FlexAlign = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function PaymentForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <StyledPayment>
      <div>
        <Button variation="secondary">
          <FlexAlign>
            <FaArrowLeft />
            <span>Go Back to Cart</span>
          </FlexAlign>
        </Button>
      </div>
      <div>
        <StyledCoupon>
          <FormRow label="Redeem Coupon">
            <Input type="text" placeholder="Coupon #" {...register("Coupon")} />
          </FormRow>
          <div>
            <Button>Apply</Button>
          </div>
        </StyledCoupon>
      </div>
      <h3>Payment</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4>Card Information</h4>
          <GridItem>
            <StyledInput
              flex={2}
              type="text"
              placeholder="1234 5678 9012 3456"
              {...register("cardNumber", {
                required: "This field is required",
              })}
            />
            <StyledInput
              flex={1}
              type="text"
              placeholder="MM / YYYY"
              {...register("expiryDate", {
                required: "This field is required",
              })}
            />
            <StyledInput
              type="text"
              placeholder="CVV"
              {...register("CVV", {
                required: "This field is required",
              })}
            />
          </GridItem>
        </div>
        <div>
          <h4>Card Holder Name</h4>
          <StyledInput type="text" />
        </div>
        <div>
          <Button size="large" type="submit">
            Make Payment
          </Button>
        </div>
      </StyledForm>
    </StyledPayment>
  );
}

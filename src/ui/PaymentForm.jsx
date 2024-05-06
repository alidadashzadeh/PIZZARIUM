import { styled } from "styled-components";
import FormRow from "./FormRow";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { Button } from "./Button";

const StyledPayment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  & h3 {
    text-align: center;
    padding-bottom: 2rem;
  }
`;
export default function PaymentForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <StyledPayment>
      <h3>Pay With Card</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name on Card" error={errors?.name?.message} fixedHeight>
          <Input
            type="text"
            placeholder="James mcCowan"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Card Number"
          error={errors?.number?.message}
          fixedHeight
        >
          <Input
            type="number"
            placeholder="1234 5678 9123 4567"
            {...register("number", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Expiry Date"
          error={errors?.Expiry?.message}
          fixedHeight
        >
          <Input
            type="date"
            {...register("Expiry", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="CVV" error={errors?.CVV?.message} fixedHeight>
          <Input
            type="number"
            placeholder="123"
            {...register("CVV", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <Button type="submit">Make Payment</Button>
      </form>
    </StyledPayment>
  );
}

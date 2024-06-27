import { styled } from "styled-components";
import FormRow from "./FormRow";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import { totalOrderCost } from "../utils/orderCalculations";
import { useCreateOrder } from "../features/order/useCreateOrder";
import { useUser } from "../features/auth/useUser";

const StyledPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
`;

const StyledCoupon = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: flex-end;
  gap: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-text-grey);
  padding: 1rem 2rem;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 60px;
  gap: 4px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
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
  const navigate = useNavigate();
  const { order, selectedAddress, resetOrder } = useOrder();
  const totalPrice = totalOrderCost(order);
  const { createOrder, isLoading } = useCreateOrder();
  const { user } = useUser();

  function onSubmit(data) {
    createOrder(
      { order, user, selectedAddress, cardInfo: data },
      {
        onSuccess: (data) => {
          console.log(data);
          navigate(`/receipt/${data.id}`);
          resetOrder();
          reset();
        },
      }
    );
  }
  return (
    <StyledPayment>
      <div>
        <Button
          size="small"
          variation="secondary"
          onClick={() => navigate("/order")}
        >
          <FlexAlign>
            <FaArrowLeft />
            <span>Go Back to Cart</span>
          </FlexAlign>
        </Button>
      </div>

      <StyledCoupon>
        <FormRow label="Redeem Coupon">
          <Input type="text" placeholder="Coupon #" />
        </FormRow>
        <div>
          <Button variation="secondary" size="small">
            Apply
          </Button>
        </div>
      </StyledCoupon>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <GridItem>
          <FormRow
            fixedHeight={true}
            label="Card Number"
            error={errors?.cardNumber?.message}
          >
            <Input
              type="text"
              placeholder="1234 5678 9012 3456"
              defaultValue={"1234567890123456"}
              {...register("cardNumber", {
                required: "This field is required",
                minLength: {
                  value: 16,
                  message: "Card Number Not correct",
                },
                maxLength: {
                  value: 16,
                  message: "Card Number Not correct",
                },
              })}
            />
          </FormRow>
          <FormRow
            error={errors?.expiryDate?.message}
            fixedHeight={true}
            label="Expiry Date"
          >
            <Input
              type="text"
              placeholder="MM / YYYY"
              defaultValue={1124}
              {...register("expiryDate", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow error={errors?.CVV?.message} fixedHeight={true} label="CVV">
            <Input
              type="text"
              placeholder="888"
              defaultValue={333}
              {...register("CVV", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            error={errors?.name?.message}
            label="Card Holder Name"
            fixedHeight={true}
          >
            <Input
              type="text"
              placeholder="888"
              defaultValue={"anna Lucas"}
              {...register("name", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </GridItem>

        <div>
          <Button type="submit" disabled={isLoading}>
            Make Payment ($ {(totalPrice * 1.13).toFixed(2)})
          </Button>
        </div>
      </StyledForm>
    </StyledPayment>
  );
}

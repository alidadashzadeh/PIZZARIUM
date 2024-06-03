import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useAddNewAddress } from "./useAddNewAddress";
import { useUser } from "../auth/useUser";
import { motion } from "framer-motion";

const Form = styled.form`
  margin: 0 auto;
  border-radius: 15px;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform-origin: top;
`;

const FlexItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
`;

function UserAddressForm({ setShowForm }) {
  const { currentUserData } = useUser();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { addNewAddress, isAddingNewAddress } = useAddNewAddress();
  const currentUser = currentUserData;

  function onSubmit(data) {
    const userAddress = [
      ...currentUser.address,
      {
        address: `unit ${data.unit}, ${data.street}`,
        isDefault: false,
      },
    ];
    addNewAddress(userAddress, {
      onSettled: () => {
        reset();
        setShowForm(false);
      },
    });
  }

  function handleCancel(e) {
    e.preventDefault(0);
    reset();
    setShowForm(false);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      as={motion.form}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <FlexItem>
        <FormRow label="Unit #" error={errors?.unit?.message}>
          <Input
            type="number"
            placeholder="2304"
            {...register("unit", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Street" error={errors?.street?.message}>
          <Input
            type="text"
            placeholder="88 King St West"
            {...register("street", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </FlexItem>
      <FlexItem>
        <FormRow label="Postal Code">
          <Input
            type="text"
            placeholder="A8A 8A8"
            {...register("postalCode")}
          />
        </FormRow>
        <FormRow label="Building Buzzer">
          <Input type="text" placeholder="e.g. 2345" {...register("buzzer")} />
        </FormRow>
      </FlexItem>
      <FormRow label="Prefered delivery location">
        <Input
          type="text"
          placeholder="e.g. unit or Lobby"
          {...register("deliveryLocation")}
        />
      </FormRow>

      <ButtonGroup>
        <Button variation="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isAddingNewAddress}>
          Add New Address
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default UserAddressForm;

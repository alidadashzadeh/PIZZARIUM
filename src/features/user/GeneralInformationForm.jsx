/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { useUser } from "../auth/useUser";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Spinner from "../../ui/Spinner";

const Form = styled.form`
  border-bottom: 2px solid var(--color-text-grey);
  padding: 1rem 2rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const FlexItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  align-self: flex-end;
`;

function GeneralInformationForm() {
  const { user, isLoading } = useUser();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdatingUser } = useUpdateUser();

  const currentUser = user?.user?.user_metadata;
  function onSubmit(data) {
    const updatedUserData = {
      data: {
        fullName: data.fullName,
        phone: data.phone,
      },
    };
    updateUser(updatedUserData);
  }

  function handleCancel(e) {
    e.preventDefault();
    reset();
  }

  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>General Information</FormTitle>
      <FlexItem>
        <FormRow label="Name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="fullName"
            placeholder="Full Name"
            defaultValue={currentUser?.fullName}
            {...register("fullName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            type="text"
            id="email"
            disabled
            placeholder="Enter Your Email"
            Value={currentUser?.email}
          />
        </FormRow>

        <FormRow label="Phone">
          <Input
            type="tel"
            id="phone"
            placeholder="(888) 888-8888"
            defaultValue={currentUser?.phone}
            {...register("phone")}
          />
        </FormRow>
      </FlexItem>

      <StyledButtonGroup>
        <Button
          size="small"
          variation="secondary"
          disabled={isUpdatingUser}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button size="small" type="submit" disabled={isUpdatingUser}>
          Save changes
        </Button>
      </StyledButtonGroup>
    </Form>
  );
}

export default GeneralInformationForm;

/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useUser } from "../auth/useUser";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import { Button } from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Spinner from "../../ui/Spinner";
import { UserIcon } from "../../ui/UserIcon";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { StyledInput } from "../../ui/StyledInput";
import InputLeftIcon from "../../ui/InputLeftIcon";

const Form = styled.form`
  border-bottom: 2px solid var(--color-text-grey);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledUsericon = styled(UserIcon)`
  position: absolute;
  z-index: 1000;
`;
const StyledEmailIcon = styled(TfiEmail)`
  position: absolute;
  z-index: 1000;
  font-size: 20px;
`;
const StyledPhoneIcon = styled(FiPhone)`
  position: absolute;
  z-index: 1000;
  font-size: 20px;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const FlexItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1200px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
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
        <FormRow
          label="Name"
          error={errors?.fullName?.message}
          fixedheight={true}
        >
          <InputLeftIcon>
            <StyledUsericon size={20} />
          </InputLeftIcon>

          <StyledInput
            type="text"
            id="fullName"
            placeholder="Full Name"
            defaultValue={currentUser?.fullName}
            {...register("fullName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="Email"
          error={errors?.email?.message}
          fixedheight={true}
        >
          <InputLeftIcon>
            <StyledEmailIcon />
          </InputLeftIcon>
          <StyledInput
            type="text"
            id="email"
            disabled
            placeholder="Enter Your Email"
            Value={currentUser?.email}
          />
        </FormRow>

        <FormRow label="Phone" fixedheight={true}>
          <InputLeftIcon>
            <StyledPhoneIcon />
          </InputLeftIcon>
          <StyledInput
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

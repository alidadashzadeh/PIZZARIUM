import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";
import { useChangePassword } from "./useChangePassword";
import { useUser } from "../auth/useUser";

const Form = styled.form`
  border-bottom: 2px solid var(--color-text-grey);
  padding: 1rem 2rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  align-self: flex-end;
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
function UserPasswordSettingsForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;

  const { currentUserData } = useUser();

  const { changePassword, isChangingPassword } = useChangePassword();

  function onSubmit(data) {
    console.log(currentUserData);
    changePassword(data.newPassword);
  }

  function handleCancel(e) {
    e.preventDefault();
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Password</FormTitle>
      <FlexItem>
        <FormRow label="New Password" error={errors?.newPassword?.message}>
          <Input
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "password should be minimum 8 character",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Re-enter New Password"
          error={errors?.confirmNewPassword?.message}
        >
          <Input
            type="password"
            id="confirmNewPassword"
            {...register("confirmNewPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().newPassword || "password need to match",
            })}
          />
        </FormRow>
      </FlexItem>

      <StyledButtonGroup>
        <Button
          variation="secondary"
          onClick={handleCancel}
          disabled={isChangingPassword}
          size="small"
        >
          Cancel
        </Button>
        <Button size="small" type="submit" disabled={isChangingPassword}>
          Save Change
        </Button>
      </StyledButtonGroup>
    </Form>
  );
}

export default UserPasswordSettingsForm;

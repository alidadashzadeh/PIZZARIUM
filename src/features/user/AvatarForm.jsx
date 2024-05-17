import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Avatar from "../../ui/Avatar";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";

const StyledAvatarForm = styled.form`
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
  display: flex;
  gap: 2rem;
`;
const StyledButtonGroup = styled(ButtonGroup)`
  align-self: flex-end;
`;
function AvatarForm() {
  const { register, handleSubmit, reset } = useForm();
  const { updateUser, isUpdatingUser } = useUpdateUser();

  function onSubmit(data) {
    if (!data) return;
    const image = data.image[0];
    const updatedUserData = {
      data: {
        image,
      },
    };
    updateUser(updatedUserData);
  }

  function handleCancel(e) {
    e.preventDefault();
    reset();
  }

  return (
    <StyledAvatarForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Avatar </FormTitle>
      <FormRow>
        <FlexItem>
          <Avatar />
          <FileInput id="avatar" accept="image/*" {...register("image")} />
        </FlexItem>
      </FormRow>

      <StyledButtonGroup>
        <Button
          variation="secondary"
          disabled={isUpdatingUser}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isUpdatingUser}>
          Save changes
        </Button>
      </StyledButtonGroup>
    </StyledAvatarForm>
  );
}

export default AvatarForm;

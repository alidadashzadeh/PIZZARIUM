import styled from "styled-components";
import Avatar from "../../ui/Avatar";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";

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
  display: flex;
  gap: 2rem;
  align-items: center;
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Avatar </FormTitle>
      <FlexItem>
        <Avatar size={84} />
        <FileInput id="avatar" accept="image/*" {...register("image")} />
      </FlexItem>

      <StyledButtonGroup>
        <Button
          variation="secondary"
          disabled={isUpdatingUser}
          onClick={handleCancel}
          size="small"
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

export default AvatarForm;

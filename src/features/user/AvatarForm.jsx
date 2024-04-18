import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Avatar from "../../ui/Avatar";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";

const StyledAvatarForm = styled.form`
	width: 50%;
	margin: 0 auto;
	border: 2px solid var(--color-yellow-700);
	border-radius: 15px;
	padding: 2rem 4rem;
	position: relative;
`;

const FormTitle = styled.div`
	position: absolute;
	padding: 0 1rem;
	top: 0;
	left: 2rem;
	transform: translateY(-50%);
	background-color: var(--color-grey-0);
	font-size: 20px;
`;

const FlexItem = styled.div`
	display: flex;
	gap: 2rem;
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
			<FormTitle>Avatar Information</FormTitle>
			<FormRow label="Avatar">
				<FlexItem>
					<Avatar />
					<FileInput id="avatar" accept="image/*" {...register("image")} />
				</FlexItem>
			</FormRow>

			<ButtonGroup>
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
			</ButtonGroup>
		</StyledAvatarForm>
	);
}

export default AvatarForm;

import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";
import { useChangePassword } from "./useChangePassword";
import { useUser } from "../auth/useUser";

const Form = styled.form`
	width: 50%;
	margin: 0 auto;
	margin-top: 5rem;
	border: 2px solid var(--color-yellow-700);
	border-radius: 15px;
	padding: 2rem 4.6rem;
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

	function onError() {
		// reset();
	}

	function handleCancel() {
		reset();
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			{/* <FormRow
				label="Current Password"
				error={errors?.currentPassword?.message}
			>
				<Input
					type="password"
					id="currentPassword"
					{...register("currentPassword", {
						required: "this field is required",
					})}
				/>
			</FormRow> */}

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

			<ButtonGroup>
				<Button
					variation="secondary"
					onClick={handleCancel}
					disabled={isChangingPassword}
				>
					Cancel
				</Button>
				<Button type="submit" disabled={isChangingPassword}>
					Change Password
				</Button>
			</ButtonGroup>
		</Form>
	);
}

export default UserPasswordSettingsForm;

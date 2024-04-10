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
import FileInput from "../../ui/FileInput";
import Avatar from "../../ui/Avatar";

const Form = styled.form`
	width: 50%;
	margin: 0 auto;
	margin-top: 5rem;
	border: 2px solid var(--color-yellow-700);
	border-radius: 15px;
	padding: 2rem 4.6rem;
`;

const FlexItem = styled.div`
	display: flex;
	gap: 2rem;
`;

function GeneralSettingsForm() {
	const { user, isLoading } = useUser();
	const { register, handleSubmit, formState, reset } = useForm();
	const { errors } = formState;
	const { updateUser, isUpdatingUser } = useUpdateUser();

	const currentUser = user?.user?.user_metadata;
	function onSubmit(data) {
		const image = data.image[0];
		const updatedUserData = {
			data: {
				fullName: data.fullName,
				phone: data.phone,
				image,
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
			<FormRow label="Full Name *" error={errors?.fullName?.message}>
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

			<FormRow label="Phone">
				<Input
					type="tel"
					id="phone"
					placeholder="(888) 888-8888"
					defaultValue={currentUser?.phone}
					{...register("phone")}
				/>
			</FormRow>

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
		</Form>
	);
}

export default GeneralSettingsForm;

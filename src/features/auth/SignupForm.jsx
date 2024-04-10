/* eslint-disable react/no-unescaped-entities */
import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRow from "../../ui/FormRow";
import { useCreateUser } from "./useCreateUser";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
	width: 25%;
	margin: 0 auto;
	padding: 4.6rem 2.4rem;
	border: 2px solid var(--color-yellow-700);
	border-radius: 20px;
`;

const StyledUserIcon = styled(CiUser)`
	position: absolute;
	color: grey;
	font-size: 22px;
	top: 36%;
	left: 10px;
`;

const StyledEmailIcon = styled(CiMail)`
	position: absolute;
	color: grey;
	font-size: 22px;
	top: 36%;
	left: 10px;
`;

const StyledPasswordIcon = styled(CiLock)`
	position: absolute;
	color: grey;
	font-size: 22px;
	top: 36%;
	left: 10px;
`;

const StyledEyeOpenIcon = styled(IoEyeOutline)`
	position: absolute;
	color: grey;
	font-size: 24px;
	top: 36%;
	right: 10px;
	cursor: pointer;
	transition: all 0.2s;
`;

const StyledEyeCloseIcon = styled(IoEyeOffOutline)`
	position: absolute;
	color: grey;
	font-size: 24px;
	top: 36%;
	right: 10px;
	cursor: pointer;
	transition: all 0.2s;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	gap: 0.5rem;

	${(props) =>
		props.direction === "vertical" &&
		css`
			flex-direction: column;
		`}
`;
const RegisterButton = styled.button`
	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);
	transition: all 0.2s;
	color: var(--color-grey-700);
	background-color: var(--color-yellow-700);
	font-size: 1.6rem;
	padding: 1.2rem 2.4rem;
	font-weight: 500;
	width: 100%;

	&:hover {
		color: #fff;
	}
`;

const Terms = styled.div`
	font-size: 12px;
`;

const TermsButton = styled.div`
	font-size: 14px;
	cursor: pointer;
`;
const StyledMessage = styled.div`
	text-align: center;
	font-size: 14px;
	padding-top: 1rem;
	padding-right: 1rem;
`;

const StyledStrong = styled.span`
	cursor: pointer;
	color: var(--color-yellow-700);
	text-decoration: underline;
	font-size: 14px;
`;

function SignupForm() {
	const [ShowPassword, setShowPassword] = useState(false);
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;

	const navigate = useNavigate();
	const { createUser, isCreatingUser } = useCreateUser();

	function handleClickEye() {
		setShowPassword((s) => !s);
	}

	function onSubmit({ email, password, fullName }) {
		createUser({ email, password, fullName }, { onSettled: () => reset() });
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Full Name *" error={errors?.fullName?.message}>
				<Input
					type="text"
					id="fullName"
					placeholder="Jason Mose"
					{...register("fullName", {
						required: "this field is required",
					})}
				/>
				<StyledUserIcon />
			</FormRow>
			<FormRow label="Email Address *" error={errors?.email?.message}>
				<Input
					type="text"
					id="email"
					placeholder="jsonmose87@gmail.com"
					{...register("email", {
						required: "this field is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Please provide a valid email address",
						},
					})}
				/>
				<StyledEmailIcon />
			</FormRow>
			<FormRow label="Password *" error={errors?.password?.message}>
				<Input
					type={ShowPassword ? "text" : "password"}
					id="password"
					placeholder="Password"
					{...register("password", {
						required: "this field is required",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters",
						},
					})}
				/>
				<StyledPasswordIcon />
				{ShowPassword ? (
					<StyledEyeCloseIcon onClick={handleClickEye} />
				) : (
					<StyledEyeOpenIcon onClick={handleClickEye} />
				)}
			</FormRow>

			<Container>
				<RegisterButton type="submit" disabled={isCreatingUser}>
					Register
				</RegisterButton>
			</Container>

			<Container direction="vertical">
				<Terms>By clicking Register, You agree to accept PIZZARIUM's</Terms>
				<TermsButton
					variation="secondary"
					size="tel"
					initial={"Enter your Fullname"}
				>
					Terms and Conditions
				</TermsButton>
			</Container>
			<StyledMessage onClick={() => navigate("/login")}>
				Already has an Account? <StyledStrong>Login</StyledStrong>
			</StyledMessage>
		</Form>
	);
}

export default SignupForm;

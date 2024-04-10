import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";

const Form = styled.form`
	width: 25%;
	margin: 0 auto;
	padding: 2rem;
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

const StyledButton = styled.button`
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

const StyledMessage = styled.div`
	text-align: center;
	font-size: 14px;
	padding-top: 1rem;
	padding-right: 1rem;
`;

const StyledLink = styled.div`
	padding-top: 1rem;
	text-align: center;
	cursor: pointer;
	color: var(--color-yellow-700);
	text-decoration: underline;
	font-size: 14px;
`;
const StyledStrong = styled.span`
	cursor: pointer;
	color: var(--color-yellow-700);
	text-decoration: underline;
	font-size: 14px;
`;

function LoginForm() {
	const { login, isLogingin } = useLogin();
	const navigate = useNavigate();
	const { register, handleSubmit, formState, reset } = useForm();
	const { errors } = formState;

	function onSubmit({ email, password }) {
		if (!email || !password) return;
		login({ email, password }, { onSettled: () => reset() });
	}

	function onError(error) {
		console.log(error);
	}
	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<FormRow label="Email Address *" error={errors?.email?.message}>
				<Input
					type="text"
					id="email"
					placeholder="jsonmose87@gmail.com"
					defaultValue="alidadashzadeh94@gmail.com"
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
					type="password"
					id="password"
					placeholder="Password"
					defaultValue="1111111111"
					{...register("password", { required: "this field is required" })}
				/>
				<StyledPasswordIcon />
			</FormRow>

			<StyledButton type="submit" disabled={isLogingin}>
				Sign in
			</StyledButton>
			<StyledLink>Forgot your Password?</StyledLink>
			<StyledMessage>
				Are you new?
				<StyledStrong onClick={() => navigate("/signup")}>
					Create An Account
				</StyledStrong>
			</StyledMessage>
		</Form>
	);
}

export default LoginForm;

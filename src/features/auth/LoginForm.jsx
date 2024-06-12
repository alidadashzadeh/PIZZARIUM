import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useLogin } from "./useLogin";
import { Button } from "../../ui/Button";
import { StyledInput } from "../../ui/StyledInput";
import InputLeftIcon from "../../ui/InputLeftIcon";

const Container = styled.div``;
const Form = styled.form`
  margin: 0 auto;
`;

const StyledEmailIcon = styled(CiMail)`
  font-size: 20px;
`;

const StyledPasswordIcon = styled(CiLock)`
  font-size: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

function LoginForm({ location }) {
  const { login, isLogingin } = useLogin();
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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow
          label="Email Address *"
          error={errors?.email?.message}
          fixedheight={true}
        >
          <StyledInput
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
          <InputLeftIcon>
            <StyledEmailIcon />
          </InputLeftIcon>
        </FormRow>

        <FormRow label="Password *" error={errors?.password?.message}>
          <StyledInput
            type="password"
            id="password"
            placeholder="Password"
            defaultValue="1111111111"
            {...register("password", { required: "this field is required" })}
          />
          <InputLeftIcon>
            <StyledPasswordIcon />
          </InputLeftIcon>
        </FormRow>

        <StyledDiv>
          <Button size="small" type="submit" disabled={isLogingin}>
            Sign in
          </Button>
        </StyledDiv>
      </Form>
    </Container>
  );
}

export default LoginForm;

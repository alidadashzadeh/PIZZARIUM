/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useCreateUser } from "./useCreateUser";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Button } from "../../ui/Button";

const Form = styled.form`
  margin: 0 auto;
  padding: 4.6rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: ${(props) => props.vertical && "column"};
`;

const StyledUserIcon = styled(CiUser)`
  position: absolute;
  color: grey;
  font-size: 22px;
  top: 50%;
  left: 10px;
`;

const StyledEmailIcon = styled(CiMail)`
  position: absolute;
  color: grey;
  font-size: 24px;
  top: 50%;
  left: 6px;
`;

const StyledPasswordIcon = styled(CiLock)`
  position: absolute;
  color: grey;
  font-size: 22px;
  top: 50%;
  left: 10px;
`;

const StyledEyeOpenIcon = styled(IoEyeOutline)`
  position: absolute;
  color: grey;
  font-size: 24px;
  top: 50%;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

const StyledEyeCloseIcon = styled(IoEyeOffOutline)`
  position: absolute;
  color: grey;
  font-size: 24px;
  top: 50%;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  gap: 0.5rem;
`;

function SignupForm({ vertical }) {
  const [ShowPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { createUser, isCreatingUser } = useCreateUser();

  function handleClickEye() {
    setShowPassword((s) => !s);
  }

  function onSubmit({ email, password, fullName }) {
    createUser({ email, password, fullName }, { onSettled: () => reset() });
  }

  function handleCancel(e) {
    e.preventDefault();
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FlexItem vertical={vertical}>
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
      </FlexItem>

      <Container>
        <Button size="small" variation="secondary" onClick={handleCancel}>
          Clear
        </Button>
        <Button size="medium" type="submit" disabled={isCreatingUser}>
          Register
        </Button>
      </Container>
    </Form>
  );
}

export default SignupForm;

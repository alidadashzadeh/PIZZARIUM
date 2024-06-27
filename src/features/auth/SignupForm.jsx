/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
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
import InputLeftIcon from "../../ui/InputLeftIcon";
import { StyledInput } from "../../ui/StyledInput";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : null};

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledUserIcon = styled(CiUser)`
  position: absolute;
  font-size: 20px;
`;

const StyledEmailIcon = styled(CiMail)`
  position: absolute;
  font-size: 20px;
`;

const StyledPasswordIcon = styled(CiLock)`
  position: absolute;
  font-size: 22px;
`;

const StyledEyeOpenIcon = styled(IoEyeOutline)`
  position: absolute;
  color: grey;
  font-size: 24px;
  top: 35px;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

const StyledEyeCloseIcon = styled(IoEyeOffOutline)`
  position: absolute;
  color: grey;
  font-size: 24px;
  top: 35px;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.direction === "vertical" ? "center" : "flex-end"};
  align-items: center;
  padding-top: 1rem;
  gap: 0.5rem;
`;

function SignupForm({ direction }) {
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
      <FlexItem direction={direction}>
        <FormRow label="Full Name *" error={errors?.fullName?.message}>
          <StyledInput
            type="text"
            id="fullName"
            placeholder="Jason Mose"
            {...register("fullName", {
              required: "this field is required",
            })}
          />
          <InputLeftIcon>
            <StyledUserIcon />
          </InputLeftIcon>
        </FormRow>
        <FormRow label="Email Address *" error={errors?.email?.message}>
          <StyledInput
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

          <InputLeftIcon>
            <StyledEmailIcon />
          </InputLeftIcon>
        </FormRow>
        <FormRow label="Password *" error={errors?.password?.message}>
          <StyledInput
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

          <InputLeftIcon>
            <StyledPasswordIcon />
          </InputLeftIcon>
          {ShowPassword ? (
            <StyledEyeCloseIcon onClick={handleClickEye} />
          ) : (
            <StyledEyeOpenIcon onClick={handleClickEye} />
          )}
        </FormRow>
      </FlexItem>

      <Container direction={direction}>
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

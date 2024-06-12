import Logo from "./Logo";
import { UserIcon } from "./UserIcon";

function SignupHeader() {
  return (
    <>
      <UserIcon size={84} />
      {/* <Logo /> */}
      <h2>Create New Account</h2>
      <span>Enter your details to register</span>
    </>
  );
}

export default SignupHeader;

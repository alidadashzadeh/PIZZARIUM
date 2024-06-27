import Select from "../../ui/Select";
import { useUser } from "../auth/useUser";
import styled from "styled-components";
import UserAddressForm from "./UserAddressForm";

const StyledAddressSettings = styled.div`
  /* margin: 0 auto; */
  border-bottom: 2px solid var(--color-text-grey);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    margin: 0;
    max-width: 100vw;
  }
`;
function UserAddresInformationForm() {
  const { currentUserData } = useUser();

  const addressOptions = currentUserData?.address?.map((address) => {
    return { label: address?.address, value: address?.address };
  });

  return (
    <StyledAddressSettings>
      <div>Address History</div>
      <Select options={addressOptions} />
      <UserAddressForm />
    </StyledAddressSettings>
  );
}

export default UserAddresInformationForm;

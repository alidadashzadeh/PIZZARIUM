import Select from "../../ui/Select";
import { useUser } from "../auth/useUser";
import styled from "styled-components";
import UserAddressForm from "./UserAddressForm";

const StyledAddressSettings = styled.div`
  margin: 0 auto;
  border-bottom: 2px solid var(--color-text-grey);
  padding: 2rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

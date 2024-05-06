// import UserProfileForm from "../features/user/UserProfileForm";
import styled from "styled-components";
import Header from "../ui/Header";
import GeneralInformationForm from "../features/user/GeneralInformationForm";
import UserPasswordForm from "../features/user/UserPasswordSettingsFrom";
import UserAddresInformationForm from "../features/user/UserAddressSettings";
import AvatarForm from "../features/user/AvatarForm";

const StyledUserProfile = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;

const FlexItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 4rem;
`;

const Main = styled.div`
  margin-top: 4rem;
`;
function UserProfile() {
  return (
    <StyledUserProfile>
      <Header />
      <GeneralInformationForm />
      <AvatarForm />
      <UserPasswordForm />
      <UserAddresInformationForm />
    </StyledUserProfile>
  );
}

export default UserProfile;

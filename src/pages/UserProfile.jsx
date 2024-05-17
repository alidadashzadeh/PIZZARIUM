// import UserProfileForm from "../features/user/UserProfileForm";
import styled from "styled-components";
import Header from "../ui/Header";
import GeneralInformationForm from "../features/user/GeneralInformationForm";
import UserPasswordForm from "../features/user/UserPasswordSettingsFrom";
import UserAddresInformationForm from "../features/user/UserAddressSettings";
import AvatarForm from "../features/user/AvatarForm";
import SettingsNav from "../features/user/SettingsNav";
import { useState } from "react";
import UserCustomPizzaSettings from "../features/user/UserCustomPizzaSettings";
import UserOrderSettings from "../features/user/UserOrderSettings";

const StyledUserProfile = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;

const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 256px 1fr;
`;

const StyledForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function UserProfile() {
  const [location, setLocation] = useState("userProfile");
  return (
    <StyledUserProfile>
      <Header />
      <StyledSettings>
        <SettingsNav location={location} setLocation={setLocation} />
        <StyledForms>
          {location === "userProfile" && (
            <>
              <GeneralInformationForm />
              <AvatarForm />
              <UserPasswordForm />
            </>
          )}
          {location === "addresses" && <UserAddresInformationForm />}
          {location === "customPizzas" && <UserCustomPizzaSettings />}
          {location === "orders" && <UserOrderSettings />}
        </StyledForms>
      </StyledSettings>
    </StyledUserProfile>
  );
}

export default UserProfile;

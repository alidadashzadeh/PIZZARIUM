// import UserProfileForm from "../features/user/UserProfileForm";
import styled from "styled-components";
import GeneralInformationForm from "../features/user/GeneralInformationForm";
import UserPasswordForm from "../features/user/UserPasswordSettingsFrom";
import UserAddresInformationForm from "../features/user/UserAddressSettings";
import AvatarForm from "../features/user/AvatarForm";
import { useState } from "react";
import UserCustomPizzaSettings from "../features/user/UserCustomPizzaSettings";
import UserOrderSettings from "../features/user/UserOrderSettings";
import NavigationList from "../ui/NavigationList";
import PageTransition from "../ui/PageTransition";

const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  padding: 1rem 2rem;

  @media screen and (max-width: 1200px) and (min-width: 768px) {
    grid-template-columns: 12rem 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const StyledForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const options = [
  { label: "User Profile", value: "userProfile" },
  { label: "Address History", value: "addresses" },
  { label: "Custom pizzas", value: "customPizzas" },
  { label: "Order History", value: "orders" },
];
function UserProfile() {
  const [selected, setSelected] = useState("userProfile");
  return (
    <PageTransition>
      <StyledSettings>
        <NavigationList
          options={options}
          label="Settings"
          selected={selected}
          setSelected={setSelected}
        />
        <StyledForms>
          {selected === "userProfile" && (
            <>
              <GeneralInformationForm />
              <AvatarForm />
              <UserPasswordForm />
            </>
          )}
          {selected === "addresses" && <UserAddresInformationForm />}
          {selected === "customPizzas" && <UserCustomPizzaSettings />}
          {selected === "orders" && <UserOrderSettings />}
        </StyledForms>
      </StyledSettings>
    </PageTransition>
  );
}

export default UserProfile;

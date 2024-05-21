/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../auth/useLogout";
import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { UserIcon } from "../../ui/UserIcon";
import DarkToggle from "../../ui/DarkToggle";
import { useOrder } from "../../context/OrderContext";

const StyledPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 1rem;
  background-color: var(--color-grey-0);
  z-index: 100;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-grey-50);

  & span {
    font-size: 16px;
  }
`;

const Center = styled.div`
  margin: 0 auto;
`;
const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
const UserNameText = styled.div`
  font-size: 16px;
`;
const UserEmailText = styled.div`
  font-size: 16px;
  color: var(--color-text-grey);
`;

const StyledSettingIcon = styled(IoMdSettings)`
  font-size: 36px;
  color: var(--color-text-grey);
`;
const StyledLogoutIcon = styled(CiLogout)`
  font-size: 36px;
  color: var(--color-text-grey);
`;
export default function PopUpWindow({ currentUserInfo }) {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { isDarkMode, setIsDarkMode } = useOrder();

  console.log(isDarkMode);
  return (
    <StyledPopup>
      <Center>
        {currentUserInfo?.avatar ? (
          <Avatar size="76" />
        ) : (
          <UserIcon size={36} />
        )}
      </Center>
      <Center>
        <UserNameText>{currentUserInfo?.fullName}</UserNameText>
        <UserEmailText>@{currentUserInfo?.email.split("@")[0]}</UserEmailText>
      </Center>
      <FlexItem onClick={() => navigate("/userprofile")}>
        <span>Settings</span>
        <StyledSettingIcon />
      </FlexItem>
      <FlexItem
        onClick={() => {
          setIsDarkMode((s) => !s);
        }}
      >
        <span>Dark Mode</span>
        <DarkToggle />
      </FlexItem>
      <FlexItem onClick={logout}>
        <span>Logout</span>
        <StyledLogoutIcon />
      </FlexItem>
    </StyledPopup>
  );
}

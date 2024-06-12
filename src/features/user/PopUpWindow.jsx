/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../auth/useLogout";
import { useNavigate } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { UserIcon } from "../../ui/UserIcon";
import { useOrder } from "../../context/OrderContext";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { useUser } from "../auth/useUser";

const StyledMoon = styled(FaRegMoon)`
  font-size: 28px;
`;

const StyledSun = styled(GoSun)`
  font-size: 28px;
`;
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
  const { user } = useUser();

  return (
    <StyledPopup
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
      <FlexItem onClick={() => navigate(`/userprofile/${user?.user?.id}`)}>
        <span>Settings</span>
        <StyledSettingIcon />
      </FlexItem>
      <FlexItem
        onClick={() => {
          setIsDarkMode((s) => !s);
        }}
      >
        <span>Dark Mode</span>
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, y: 100, transition: { duration: 0.1 } }}
              key="moon"
            >
              <StyledMoon />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, y: -100, transition: { duration: 0.1 } }}
              key="sun"
            >
              <StyledSun />
            </motion.div>
          )}
        </AnimatePresence>
      </FlexItem>
      <FlexItem onClick={logout}>
        <span>Logout</span>
        <StyledLogoutIcon />
      </FlexItem>
    </StyledPopup>
  );
}

import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import Avatar from "./Avatar";
import { UserIcon } from "./UserIcon";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import PopUpWindow from "../features/user/PopUpWindow";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;
`;

function UserInfo() {
  const { currentUserData } = useUser();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  if (!currentUserData)
    return (
      <Button size="small" onClick={() => navigate("/login")}>
        Sign In
      </Button>
    );

  const currentUserInfo = currentUserData;
  return (
    <StyledUserInfo
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {currentUserInfo?.avatar ? <Avatar size="48" /> : <UserIcon size={42} />}
      <AnimatePresence>
        {showPopup && <PopUpWindow currentUserInfo={currentUserInfo} />}
      </AnimatePresence>
    </StyledUserInfo>
  );
}

export default UserInfo;

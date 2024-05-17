import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import Avatar from "./Avatar";
import { UserIcon } from "./UserIcon";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import PopUpWindow from "../features/user/PopUpWindow";
import { useState } from "react";

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserNameText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const UserEmailText = styled.div`
  font-size: 14px;
  font-weight: 400;
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
    <>
      <StyledUserInfo
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        {currentUserInfo?.avatar ? <Avatar /> : <UserIcon size={64} />}
        <FlexItem>
          <UserNameText size={20}>
            {currentUserInfo?.fullName || "UserName"}
          </UserNameText>
          <UserEmailText size={12}>
            {currentUserInfo?.email || "example@user.com"}
          </UserEmailText>
        </FlexItem>
        {showPopup && <PopUpWindow />}
      </StyledUserInfo>
    </>
  );
}

export default UserInfo;

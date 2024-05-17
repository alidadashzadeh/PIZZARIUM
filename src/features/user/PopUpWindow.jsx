import styled from "styled-components";
import { Row } from "../../ui/Row";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../auth/useLogout";
import { useNavigate } from "react-router-dom";

const StyledPopup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-grey-50);
  width: 100%;
  z-index: 100;
  padding: 2rem;
  border-radius: 0px 0 10px 10px;

  & span {
    font-size: 16px;
  }
`;

const StyledSettingIcon = styled(IoMdSettings)`
  font-size: 24px;
  color: var(--color-text-grey);
`;
const StyledLogoutIcon = styled(CiLogout)`
  font-size: 24px;
  color: var(--color-text-grey);
`;
export default function PopUpWindow() {
  const { logout } = useLogout();
  const navigate = useNavigate();

  return (
    <StyledPopup>
      <Row onClick={() => navigate("/userprofile")}>
        <span>Settings</span>
        <StyledSettingIcon />
      </Row>
      <Row onClick={logout}>
        <span>Logout</span>
        <StyledLogoutIcon />
      </Row>
    </StyledPopup>
  );
}

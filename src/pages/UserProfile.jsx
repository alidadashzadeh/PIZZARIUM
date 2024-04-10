// import UserProfileForm from "../features/user/UserProfileForm";
import UserSidebar from "../features/user/UserSidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledUserProfile = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
`;
function UserProfile() {
	return (
		<StyledUserProfile>
			<UserSidebar />
			<Outlet />
		</StyledUserProfile>
	);
}

export default UserProfile;

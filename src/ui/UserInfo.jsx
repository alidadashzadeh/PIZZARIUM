import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import Avatar from "./Avatar";
import { UserIcon } from "./UserIcon";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { Row } from "./Row";
import LoginButton from "./LoginButton";

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
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
	font-size: 12px;
	font-weight: 400;
`;

function UserInfo() {
	const { user } = useUser();
	const navigate = useNavigate();

	const currentUserInfo = user?.user.user_metadata;
	return (
		<Row>
			<StyledUserInfo
				onClick={() => {
					if (!user) return;
					navigate("/userprofile");
				}}
			>
				{currentUserInfo?.avatar ? <Avatar /> : <UserIcon size={32} />}
				<FlexItem>
					<UserNameText size={20}>
						{currentUserInfo?.fullName || "UserName"}
					</UserNameText>
					<UserEmailText size={12}>
						{currentUserInfo?.email || "example@user.com"}
					</UserEmailText>
				</FlexItem>
			</StyledUserInfo>
			{!user ? <LoginButton /> : <LogoutButton />}
		</Row>
	);
}

export default UserInfo;

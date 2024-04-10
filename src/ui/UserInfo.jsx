import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import { Typography } from "./Typography";
import Avatar from "./Avatar";
import { UserIcon } from "./UserIcon";
import { useNavigate } from "react-router-dom";

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	padding: 0.5rem;
	border: 2px solid var(--color-yellow-300);
	border-radius: 15px;

	&:hover {
		background-color: var(--color-yellow-700);
	}
`;

const FlexItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function UserInfo() {
	const { user } = useUser();
	const navigate = useNavigate();

	const currentUserInfo = user?.user.user_metadata;
	return (
		<StyledUserInfo
			onClick={() => {
				if (!user) return;
				navigate("./user");
			}}
		>
			{currentUserInfo?.avatar ? <Avatar /> : <UserIcon size={32} />}
			<FlexItem>
				<Typography size={20}>
					{currentUserInfo?.fullName || "UserName"}
				</Typography>
				<Typography size={12}>
					{currentUserInfo?.email || "example@user.com"}
				</Typography>
			</FlexItem>
		</StyledUserInfo>
	);
}

export default UserInfo;

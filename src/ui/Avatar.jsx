import styled from "styled-components";
import { useUser } from "../features/auth/useUser";

const Img = styled.img`
	width: 32px;
	height: 32px;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
`;

function Avatar() {
	const { user } = useUser();
	const currentUser = user?.user?.user_metadata;
	return (
		<Img
			src={
				currentUser?.avatar
					? currentUser.avatar
					: "https://midjqwaobcnazwokoyvv.supabase.co/storage/v1/object/sign/avatars/man-with-beard-avatar-character-isolated-icon-free-vector.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL21hbi13aXRoLWJlYXJkLWF2YXRhci1jaGFyYWN0ZXItaXNvbGF0ZWQtaWNvbi1mcmVlLXZlY3Rvci5qcGciLCJpYXQiOjE3MTI2MjgwMTQsImV4cCI6MTc0NDE2NDAxNH0.qGo5y9sCDeVhC4LW1NK1sDb9CPR-Epqa_ONpemggYhM&t=2024-04-09T02%3A00%3A14.238Z"
			}
			alt="user Avatar"
		/>
	);
}

export default Avatar;

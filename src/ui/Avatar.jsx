import styled from "styled-components";
import { useUser } from "../features/auth/useUser";

const Img = styled.img`
  width: 64px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

function Avatar() {
  const { user } = useUser();
  const currentUser = user?.user?.user_metadata;
  return <Img src={currentUser?.avatar} alt="user Avatar" />;
}

export default Avatar;

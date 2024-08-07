import styled from "styled-components";
import { useUser } from "../features/auth/useUser";

const Img = styled.img`
  width: ${(props) => (props.size ? props.size : 36)}px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 500px;

  @media screen and (max-width: 1024px) {
    width: 32px;
  }
`;

function Avatar({ size }) {
  const { user } = useUser();
  const currentUser = user?.user?.user_metadata;
  return <Img size={size} src={currentUser?.avatar} alt="user Avatar" />;
}

export default Avatar;

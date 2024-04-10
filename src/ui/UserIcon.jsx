import { CiUser } from "react-icons/ci";
import styled, { css } from "styled-components";

export const UserIcon = styled(CiUser)`
	${(props) =>
		css`
			font-size: props.size;
		`}
`;

import Select from "../../ui/Select";
import { useUser } from "../auth/useUser";
import styled from "styled-components";
import UserAddressForm from "./UserAddressForm";

const StyledAddressSettings = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 0 auto;
`;
function UserAddresInformationForm() {
	const { currentUserData } = useUser();

	const addressOptions = currentUserData?.address?.map((address) => {
		return { label: address?.address, value: address?.address };
	});

	return (
		<StyledAddressSettings>
			<div>Address History</div>
			<Select options={addressOptions} />
			<UserAddressForm />
		</StyledAddressSettings>
	);
}

export default UserAddresInformationForm;

import styled from "styled-components";

const StyledDeliveryInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Label = styled.label`
	font-size: 16px;
`;

const Input = styled.input`
	outline: none;
	border: 1px solid var(--color-yellow-700);
	border-radius: var(--border-radius-sm);
	padding: 2px 5px;

	&:focus {
		background-color: var(--color-grey-100);
	}
`;
function CheckoutDeliveryInfo() {
	return (
		<StyledDeliveryInfo>
			<h3>Delivery Informtion</h3>
			{/* <StyledForm>
				<FormRow>
					<Label>Phone(cell)#</Label>
					<Input type="tel" placeholder="416 888 88 88" />
				</FormRow>
				<FormRow>
					<Label>Address 1</Label>
					<Input type="text" />
				</FormRow>
				<FormRow>
					<Label>unit</Label>
					<Input type="text" />
				</FormRow>
				<FormRow>
					<Label>city</Label>
					<Input type="text" />
				</FormRow>
			</StyledForm> */}
		</StyledDeliveryInfo>
	);
}

export default CheckoutDeliveryInfo;

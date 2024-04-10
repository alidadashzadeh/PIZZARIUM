import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";
import { Button } from "../../ui/Button";

const Form = styled.form`
	width: 50%;
	margin: 0 auto;
	margin-top: 5rem;
	border: 2px solid var(--color-yellow-700);
	border-radius: 15px;
	padding: 2rem 4.6rem;
`;

const FlexItem = styled.div`
	display: flex;
	gap: 2rem;
`;

function UserAddressForm() {
	return (
		<Form>
			<FormRow label="Unit #">
				<Input type="number" />
			</FormRow>
			<FormRow label="Street">
				<Input type="text" />
			</FormRow>
			<FormRow label="Postal Code">
				<Input type="text" />
			</FormRow>
			<FormRow label="Building Buzzer">
				<Input type="text" />
			</FormRow>
			<FormRow label="Prefered delivery location">
				<Input type="text" placeholder="e.g. unit or Lobby" />
			</FormRow>
			<FormRow label="Other information">
				<textarea />
			</FormRow>

			<ButtonGroup>
				<Button variation="secondary">Cancel</Button>
				<Button type="submit">Add New Address</Button>
			</ButtonGroup>
		</Form>
	);
}

export default UserAddressForm;

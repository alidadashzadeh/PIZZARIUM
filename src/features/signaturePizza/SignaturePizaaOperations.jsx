import styled from "styled-components";
import Operations from "../../ui/Operations";

const StyledSignaturePizzaOperations = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem 0;
`;

function SignaturePizaaOperations() {
	return (
		<StyledSignaturePizzaOperations>
			<Operations
				field="type"
				options={[
					{ label: "All", value: "all" },
					{ label: "Veggie", value: "veggie" },
					{ label: "Non-veggie", value: "non-veggie" },
				]}
			/>
		</StyledSignaturePizzaOperations>
	);
}

export default SignaturePizaaOperations;

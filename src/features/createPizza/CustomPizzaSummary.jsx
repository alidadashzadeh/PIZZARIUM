/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useOrder } from "../../context/context";

const StyledSummary = styled.div`
	margin: 1rem;
`;
function CustomPizzaSummary() {
	const { customPizza } = useOrder();
	return (
		<StyledSummary>
			<div>
				Your recipe:
				<span> {customPizza.dough},</span>
				<span> {customPizza.crust},</span>
				<span> {customPizza.sauce}</span>
				<span> {customPizza.cheese},</span>
				{customPizza.topping.map((topping) => (
					<span> {topping},</span>
				))}
				<span>
					<strong>{customPizza.size}</strong>
				</span>
				<span> size</span>
			</div>
			<div>
				<span>Overal Price: </span>
				<span>{customPizza.price}$</span>
			</div>
		</StyledSummary>
	);
}

export default CustomPizzaSummary;

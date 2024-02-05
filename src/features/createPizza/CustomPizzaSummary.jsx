/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useOrder } from "../../context/context";
import toast from "react-hot-toast";

const StyledSummary = styled.div`
	margin: 1rem;
`;
function CustomPizzaSummary() {
	const { customPizza, selectTitle } = useOrder();
	return (
		<StyledSummary>
			<div>
				Your recipe:
				<span> {customPizza.dough.name},</span>
				<span> {customPizza.crust.name},</span>
				<span> {customPizza.sauce.name}</span>
				<span> {customPizza.cheese.name},</span>
				{customPizza.topping.map((topping) => (
					<span> {topping.name},</span>
				))}
				<span>
					<strong>{customPizza.size}</strong>
				</span>
				<span> size</span>
				{customPizza.cook !== "Regular" && (
					<span>, {customPizza.cook} cook</span>
				)}
			</div>
			<div>
				<span>Overal Price: </span>
				<span>{customPizza.price}$</span>
			</div>
			<input
				placeholder="title ..."
				onChange={(e) => selectTitle(e.target.value)}
			/>
			<button
				onClick={() => {
					if (customPizza.topping.length < 3) {
						toast.error(
							"not enough toppings selected, pizza is going to look weired"
						);
						return;
					}
				}}
				disabled={customPizza.topping.length === 0}
			>
				Add to order
			</button>
		</StyledSummary>
	);
}

export default CustomPizzaSummary;

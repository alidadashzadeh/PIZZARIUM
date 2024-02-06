/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useOrder } from "../../context/context";
import toast from "react-hot-toast";
import SizePrice, { sizeLabel } from "../../utils/customPizza";
import ToppingSummaryItem from "./ToppingSummaryItem";
import { useState } from "react";

const StyledSummary = styled.div`
	margin: 1rem;
	display: flex;
	justify-content: space-between;
`;

const Recipe = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	width: 70%;
`;

const RecipeItem = styled.li`
	display: flex;
	gap: 1rem;
`;

const SummaryDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	outline: none;
	border: 2px solid var(--color-yellow-700);
	border-radius: 5px;
	padding: 0.5rem 1rem;
	color: var(--color-grey-700);
	font-weight: 500;

	&::placeholder {
		color: var(--color-yellow-700);
		opacity: 0.5;
	}
`;

const Button = styled.button`
	border: 2px solid var(--color-yellow-700);
	border-radius: 10px;
	margin-top: 5px;
	padding: 1rem 2rem;
	color: var(--color-grey-700);
	font-weight: 500;

	&:hover {
		background-color: var(--color-yellow-700);
	}

	&:disabled {
		opacity: 0.5;
	}
`;
function CustomPizzaSummary() {
	const { customPizza, selectTitle, AddOrderCustom } = useOrder();
	const [expandInstructions, setExpandInstructions] = useState(false);
	return (
		<StyledSummary>
			<Recipe>
				Your recipe:
				<RecipeItem> {customPizza.dough.name}</RecipeItem>
				<RecipeItem> {customPizza.crust.name}</RecipeItem>
				<RecipeItem> {customPizza.sauce.name}</RecipeItem>
				<RecipeItem> {customPizza.cheese.name}</RecipeItem>
				<RecipeItem>
					toppings:
					{customPizza.topping.map((topping) => (
						<ToppingSummaryItem item={topping} key={topping.name} />
					))}
				</RecipeItem>
				{customPizza.specialInstruction && (
					<RecipeItem>
						Special Instruction:
						{
							<>
								{expandInstructions
									? customPizza.specialInstruction
									: customPizza.specialInstruction.slice(0, 10)}
								{customPizza.specialInstruction.length > 10 && (
									<button onClick={() => setExpandInstructions((s) => !s)}>
										{expandInstructions ? "Show Less" : "More..."}
									</button>
								)}
							</>
						}
					</RecipeItem>
				)}
			</Recipe>
			<SummaryDetails>
				<RecipeItem>
					Size: <strong>{sizeLabel(customPizza.selectedSize)}</strong>
				</RecipeItem>
				{customPizza.cook !== "Regular" && <span>{customPizza.cook} cook</span>}
				<div>
					<span> Price: </span>
					<span>
						<strong>{SizePrice(customPizza)[customPizza.selectedSize]}$</strong>
					</span>
				</div>
				<Input
					placeholder="title ..."
					onChange={(e) => selectTitle(e.target.value)}
				/>
				<Button
					onClick={() => {
						if (customPizza.topping.length < 3) {
							toast.error(
								"not enough toppings selected, pizza is going to look weired"
							);
							return;
						}
						AddOrderCustom();
					}}
					disabled={customPizza.topping.length === 0}
				>
					Add to order
				</Button>
			</SummaryDetails>
		</StyledSummary>
	);
}

export default CustomPizzaSummary;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import ToppingSummaryItem from "./ToppingSummaryItem";
import { useState } from "react";

const StyledRecipe = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	width: 70%;
`;

const RecipeItem = styled.li`
	display: flex;
	gap: 1rem;
`;

const ExpandButton = styled.button`
	border-radius: 5px;
	padding: 0 1rem;
	color: var(--color-grey-700);
	background-color: var(--color-yellow-700);
`;

function Recipe({ customPizza }) {
	const [expandInstructions, setExpandInstructions] = useState(false);

	return (
		<StyledRecipe>
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
								<ExpandButton onClick={() => setExpandInstructions((s) => !s)}>
									{expandInstructions ? "Show Less" : "Show More..."}
								</ExpandButton>
							)}
						</>
					}
				</RecipeItem>
			)}
		</StyledRecipe>
	);
}

export default Recipe;

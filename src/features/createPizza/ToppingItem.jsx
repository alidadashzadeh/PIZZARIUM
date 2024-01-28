import styled, { css } from "styled-components";
import { useOrder } from "../../context/context";

const StyledToppingItem = styled.div`
	border: 2px solid var(--color-yellow-300);
	border-radius: 10px;
	overflow: hidden;
	font-size: 16px;
	font-weight: 500;
	position: relative;
	flex-basis: 150px;
	&:hover {
		cursor: pointer;
		transition: all 0.5s;
	}
	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);

			&::after {
				content: "Selected";
				display: block;
				background-color: var(--color-yellow-700);
				padding: 0.5rem 1rem;
				border-radius: 55px;
				position: absolute;
				right: 5%;
				top: 5%;
			}
		`}
`;
const ToppingDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem;
`;

function ToppingItem({ topping }) {
	const { customPizza, selectCustomTopping } = useOrder();
	return (
		<StyledToppingItem
			selected={customPizza.topping.includes(topping.name)}
			onClick={() => selectCustomTopping(topping.name)}
		>
			<img src={topping.picture} />
			<ToppingDetails>{topping.name}</ToppingDetails>
		</StyledToppingItem>
	);
}

export default ToppingItem;

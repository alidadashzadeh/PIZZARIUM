import styled, { css } from "styled-components";
import { useOrder } from "../../context/context";

const StyledCheeseItem = styled.div`
	border: 2px solid var(--color-yellow-300);
	border-radius: 10px;
	overflow: hidden;
	font-size: 16px;
	font-weight: 500;
	position: relative;

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
const CheeseDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem;
`;

function CheeseItem({ cheese }) {
	const { customPizza, selectCustomCheese } = useOrder();
	return (
		<StyledCheeseItem
			selected={customPizza.cheese === cheese.name}
			onClick={() => selectCustomCheese(cheese.name)}
		>
			<img src={cheese.picture} />
			<CheeseDetails>{cheese.name}</CheeseDetails>
		</StyledCheeseItem>
	);
}

export default CheeseItem;

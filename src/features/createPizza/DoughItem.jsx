import styled, { css } from "styled-components";
import { useOrder } from "../../context/context";
import ExtraPriceSign from "../../ui/ExtraPriceSign";

const StyledDoughItem = styled.div`
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
const DoughDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 2rem;
`;

function DoughItem({ dough }) {
	const { customPizza, selectCustomDough } = useOrder();
	return (
		<StyledDoughItem
			selected={customPizza.dough === dough.name}
			onClick={() => selectCustomDough(dough.name)}
		>
			<img src={dough.picture} />
			<DoughDetails>
				<span>{dough.name}</span>
				{dough.extraPrice ? <ExtraPriceSign /> : null}
			</DoughDetails>
		</StyledDoughItem>
	);
}

export default DoughItem;

import styled, { css } from "styled-components";
import { useOrder } from "../../context/context";

const StyledSauceItem = styled.div`
	border: 2px solid var(--color-yellow-300);
	border-radius: 10px;
	overflow: hidden;
	font-size: 16px;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 200px;
	height: 200px;
	&:hover {
		cursor: pointer;
		transition: all 0.5s;
	}
	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;
const SauceDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem;
`;

const Img = styled.img`
	border-radius: 500px;
`;

function SauceItem({ sauce }) {
	const { customPizza, selectCustomSauce } = useOrder();

	return (
		<StyledSauceItem
			selected={customPizza.sauce === sauce.name}
			onClick={() => selectCustomSauce(sauce.name)}
		>
			<SauceDetails>{sauce.name}</SauceDetails>
			<Img src={sauce.picture} />
		</StyledSauceItem>
	);
}

export default SauceItem;

import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledSignaturePizzasHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 48px;
	padding: 0rem 2rem;
	margin: 1rem 0;
`;

const H1 = styled.h1`
	font-size: 36px;
	font-weight: 600;
`;

const ButtonRow = styled.div`
	display: flex;
	gap: 1rem;
	background-color: var(--color-grey-50);
	border-radius: 5px;
	box-shadow: var(--shadow-sm);
`;

const Button = styled.button`
	background-color: transparent;
	padding: 1rem 2rem;
	border-radius: 5px;

	${(props) =>
		props.active &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;

function SignaturePizzasHeader() {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleClick(value) {
		searchParams.set("type", value);
		setSearchParams(searchParams);
	}
	const currentFilter = searchParams.get("type") || "all";

	return (
		<StyledSignaturePizzasHeader>
			<H1>SIGNATURE PIZZAS</H1>
			<ButtonRow>
				<Button
					active={currentFilter === "all"}
					onClick={() => handleClick("all")}
				>
					All
				</Button>
				<Button
					active={currentFilter === "veggie"}
					onClick={() => handleClick("veggie")}
				>
					Vegie
				</Button>
				<Button
					active={currentFilter === "non-veggie"}
					onClick={() => handleClick("non-veggie")}
				>
					non-Veggie
				</Button>
			</ButtonRow>
		</StyledSignaturePizzasHeader>
	);
}

export default SignaturePizzasHeader;

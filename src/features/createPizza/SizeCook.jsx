import styled, { css } from "styled-components";
import { useOrder } from "../../context/context";

const Size = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;

	& span {
		font-size: 24px;
		font-weight: 600;
		margin-right: 2rem;
	}
`;
const Cook = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;

	& span {
		font-size: 24px;
		font-weight: 600;
		margin-right: 2rem;
	}
`;

const SizeOptions = styled.div`
	display: flex;
	border: 2px solid var(--color-yellow-700);
	border-radius: 10px;
	overflow: hidden;
`;
const CookOptions = styled.div`
	display: flex;
	border: 2px solid var(--color-yellow-700);
	border-radius: 10px;
	overflow: hidden;
`;

const Option = styled.div`
	cursor: pointer;
	flex-grow: 1;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`};
`;

const Slices = styled.div`
	width: 100px;
	aspect-ratio: 1;
	border: 2px solid var(--color-yellow-300);
	border-radius: 500px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`;

const PartySlice = styled.div`
	width: 200px;
	aspect-ratio: 1.75;
	border: 2px solid var(--color-yellow-300);
	border-radius: 10px;
	display: flex;

	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`;

const Textarea = styled.textarea`
	padding: 0.5rem;
	width: 50%;
	height: 150px;
	&::placeholder {
		font-size: 16px;
		font-weight: 400;
		color: var(--color-grey-400);
	}
`;

function SizeCook() {
	const { customPizza, selectCookType, selectSize, selectInstructions } =
		useOrder();

	return (
		<>
			<Size>
				<span>Size</span>
				<SizeOptions>
					<Option
						selected={customPizza.size === "Small"}
						onClick={() => selectSize("Small")}
					>
						Small
						<Slices>6 Slices</Slices>
					</Option>
					<Option
						selected={customPizza.size === "Medium"}
						onClick={() => selectSize("Medium")}
					>
						Medium
						<Slices>8 Slices</Slices>
					</Option>
					<Option
						selected={customPizza.size === "Large"}
						onClick={() => selectSize("Large")}
					>
						Large
						<Slices>10 Slices</Slices>
					</Option>
					<Option
						selected={customPizza.size === "Extra Large"}
						onClick={() => selectSize("Extra Large")}
					>
						Extra Large
						<Slices>12 Slices</Slices>
					</Option>
					<Option
						selected={customPizza.size === "Party Size"}
						onClick={() => selectSize("Party Size")}
					>
						Party Size
						<PartySlice>24 Slices</PartySlice>
					</Option>
				</SizeOptions>
			</Size>
			<Cook>
				<span>Cook</span>
				<CookOptions>
					<Option
						selected={customPizza.cook === "Regular"}
						onClick={() => selectCookType("Regular")}
					>
						Regular
					</Option>
					<Option
						selected={customPizza.cook === "Well Done"}
						onClick={() => selectCookType("Well Done")}
					>
						Well Done
					</Option>
					<Option
						selected={customPizza.cook === "Lighly Done"}
						onClick={() => selectCookType("Lighly Done")}
					>
						Lighly Done
					</Option>
				</CookOptions>
			</Cook>

			<Textarea
				placeholder="Special Instructions"
				onChange={(e) => selectInstructions(e.target.value)}
			/>
			
		</>
	);
}

export default SizeCook;

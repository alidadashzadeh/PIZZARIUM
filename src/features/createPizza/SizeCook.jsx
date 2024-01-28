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
	text-align: center;

	${(props) =>
		props.selected &&
		css`
			background-color: var(--color-yellow-700);
		`}
`;

const Textarea = styled.textarea`
	padding: 0.5rem;
	width: 50%;
	height: 300px;
	&::placeholder {
		font-size: 16px;
		font-weight: 400;
		color: var(--color-grey-400);
	}
`;

function SizeCook() {
	const { customPizza, selectCookType, selectSize } = useOrder();

	console.log(customPizza.cookType);
	console.log(customPizza);
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
					</Option>
					<Option
						selected={customPizza.size === "Medium"}
						onClick={() => selectSize("Medium")}
					>
						Medium
					</Option>
					<Option
						selected={customPizza.size === "Large"}
						onClick={() => selectSize("Large")}
					>
						Large
					</Option>
					<Option
						selected={customPizza.size === "Extra Large"}
						onClick={() => selectSize("Extra Large")}
					>
						Extra Large
					</Option>
					<Option
						selected={customPizza.size === "Partty Size"}
						onClick={() => selectSize("Partty Size")}
					>
						Partty Size
					</Option>
				</SizeOptions>
			</Size>
			<Cook>
				<span>Cook</span>
				<CookOptions>
					<Option
						selected={customPizza.cookType === "Regular"}
						onClick={() => selectCookType("Regular")}
					>
						Regular
					</Option>
					<Option
						selected={customPizza.cookType === "Well Done"}
						onClick={() => selectCookType("Well Done")}
					>
						Well Done
					</Option>
					<Option
						selected={customPizza.cookType === "Lighly Done"}
						onClick={() => selectCookType("Lighly Done")}
					>
						Lighly Done
					</Option>
				</CookOptions>
			</Cook>

			<Textarea placeholder="Special Instructions" />
		</>
	);
}

export default SizeCook;

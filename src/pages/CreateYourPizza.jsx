import { useState } from "react";
import CrustList from "../features/createPizza/CrustList";
import DoughList from "../features/createPizza/DoughList";
import CreatePizzaHeader from "../features/createPizza/CreatePizzaHeader";
import CreatePizzaNav from "../features/createPizza/CreatePizzaNav";
import SauceList from "../features/createPizza/SauceList";
import ToppingList from "../features/createPizza/ToppingList";
import CheeseList from "../features/createPizza/CheeseList";
import SizeCook from "../features/createPizza/SizeCook";
import CustomPizzaSummary from "../features/createPizza/CustomPizzaSummary";
import styled from "styled-components";

const StyledCreatePizza = styled.div`
	position: relative;
	min-height: 100vh;
`;
function CreateYourPizza() {
	const [selected, setSelected] = useState("dough");
	return (
		<StyledCreatePizza>
			<CreatePizzaHeader />
			<CustomPizzaSummary />
			<CreatePizzaNav selected={selected} setSelected={setSelected} />
			{selected === "dough" && <DoughList />}
			{selected === "crust" && <CrustList />}
			{selected === "sauce" && <SauceList />}
			{selected === "cheese" && <CheeseList />}
			{selected === "toppings" && <ToppingList />}
			{selected === "size&cook" && <SizeCook />}
		</StyledCreatePizza>
	);
}

export default CreateYourPizza;

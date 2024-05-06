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
  display: grid;
  grid-template-columns: 26rem 2fr 1fr;
  /* grid-template-rows: 26rem 1fr; */
  gap: 1rem;
`;
function CreateYourPizza() {
  const [selected, setSelected] = useState("dough");
  return (
    <StyledCreatePizza>
      {/* <CreatePizzaHeader /> */}
      <CreatePizzaNav selected={selected} setSelected={setSelected} />
      {selected === "dough" && <DoughList />}
      {selected === "crust" && <CrustList />}
      {selected === "sauce" && <SauceList />}
      {selected === "cheese" && <CheeseList />}
      {selected === "toppings" && <ToppingList />}
      {selected === "size&cook" && <SizeCook />}
      <CustomPizzaSummary />
    </StyledCreatePizza>
  );
}

export default CreateYourPizza;

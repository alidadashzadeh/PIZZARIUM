import { useState } from "react";
import CrustList from "../features/createPizza/CrustList";
import DoughList from "../features/createPizza/DoughList";
import CreatePizzaNav from "../features/createPizza/CreatePizzaNav";
import SauceList from "../features/createPizza/SauceList";
import ToppingList from "../features/createPizza/ToppingList";
import CheeseList from "../features/createPizza/CheeseList";
import SizeCook from "../features/createPizza/SizeCook";
import CustomPizzaSummary from "../features/createPizza/CustomPizzaSummary";
import styled from "styled-components";
import Footer from "../ui/Footer";

const StyledCreatePizza = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 14rem 3fr 2fr;
  gap: 1rem;
`;
function CreateYourPizza() {
  const [selected, setSelected] = useState("dough");
  return (
    <StyledCreatePizza>
      <CreatePizzaNav selected={selected} setSelected={setSelected} />
      {selected === "dough" && <DoughList />}
      {selected === "crust" && <CrustList />}
      {selected === "sauce" && <SauceList />}
      {selected === "cheese" && <CheeseList />}
      {selected === "toppings" && <ToppingList />}
      {selected === "size&cook" && <SizeCook />}
      <CustomPizzaSummary />
      <Footer />
    </StyledCreatePizza>
  );
}

export default CreateYourPizza;

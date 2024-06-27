import { useState } from "react";
import { motion } from "framer-motion";
import CrustList from "../features/createPizza/CrustList";
import DoughList from "../features/createPizza/DoughList";
import SauceList from "../features/createPizza/SauceList";
import ToppingList from "../features/createPizza/ToppingList";
import CheeseList from "../features/createPizza/CheeseList";
import CustomPizzaSummary from "../features/createPizza/CustomPizzaSummary";
import styled from "styled-components";
import CookList from "../features/createPizza/CookList";
import NavigationList from "../ui/NavigationList";
import PageTransition from "../ui/PageTransition";

const StyledCreatePizza = styled.div`
  display: grid;
  grid-template-columns: 14rem 3fr 1fr;
  padding: 1rem 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const H2 = styled.h2`
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const options = [
  { label: "Dough", value: "dough" },
  { label: "Crust", value: "crust" },
  { label: "Sauce", value: "sauce" },
  { label: "Cheese", value: "cheese" },
  { label: "Toppings", value: "toppings" },
  { label: "Cook", value: "cook" },
];
function CreatePizza() {
  const [selected, setSelected] = useState("toppings");
  return (
    <PageTransition>
      <H2>Cretae Your Own Pizza</H2>
      <StyledCreatePizza>
        <NavigationList
          options={options}
          label="Steps"
          selected={selected}
          setSelected={setSelected}
        />

        {selected === "dough" && <DoughList />}
        {selected === "crust" && <CrustList />}
        {selected === "sauce" && <SauceList />}
        {selected === "cheese" && <CheeseList />}
        {selected === "toppings" && <ToppingList />}
        {selected === "cook" && <CookList />}
        <CustomPizzaSummary />
      </StyledCreatePizza>
    </PageTransition>
  );
}

export default CreatePizza;

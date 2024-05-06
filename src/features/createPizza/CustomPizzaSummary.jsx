/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import toast from "react-hot-toast";
import SizePrice, { sizeLabel } from "../../utils/customPizza";
import { Button } from "../../ui/Button";
import Recipe from "./Recipe";
import PizzaDemo from "./PizzaDemo";

const StyledSummary = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  max-height: 600px;
  border-left: 1px solid var(--color-grey-300);
`;

const RecipeItem = styled.li`
  display: flex;
  gap: 1rem;
`;

const SummaryDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  border: 2px solid var(--color-yellow-700);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: var(--color-grey-700);
  font-weight: 500;

  &::placeholder {
    color: var(--color-yellow-700);
    opacity: 0.5;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 5px;

  &:hover {
    color: white;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

function CustomPizzaSummary() {
  const { customPizza, selectTitle, AddOrderCustom } = useOrder();
  return (
    <StyledSummary>
      <Recipe customPizza={customPizza} />

      <PizzaDemo />
      <SummaryDetails>
        <RecipeItem>
          Size: <strong>{sizeLabel(customPizza.selectedSize)}</strong>
        </RecipeItem>
        <span>{customPizza.cook} cook</span>
        <div>
          <span> Price: </span>
          <span>
            <strong>{SizePrice(customPizza)[customPizza.selectedSize]}$</strong>
          </span>
        </div>
        <Input
          placeholder="title ..."
          onChange={(e) => selectTitle(e.target.value)}
        />
        <StyledButton
          variation={"primary"}
          onClick={() => {
            if (customPizza.topping.length < 3) {
              toast.error(
                "not enough toppings selected, pizza is going to look weired"
              );
              return;
            }
            AddOrderCustom();
          }}
          disabled={customPizza.topping.length < 3}
        >
          {customPizza.topping.length < 3
            ? "Minimum 3 Toppings"
            : "Add to order"}
        </StyledButton>
      </SummaryDetails>
    </StyledSummary>
  );
}

export default CustomPizzaSummary;

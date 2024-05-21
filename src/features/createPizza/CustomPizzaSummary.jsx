/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import toast from "react-hot-toast";
import { Button } from "../../ui/Button";
import Recipe from "./Recipe";
import PizzaDemo from "./PizzaDemo";
import SizeSelect from "../../ui/SizeSelect";
import SizePrice from "../../utils/customPizza";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const Price = styled.span`
  color: var(--color-primary);
  padding: 1rem;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
`;

function CustomPizzaSummary() {
  const { customPizza, AddOrderCustom, selectSize } = useOrder();
  return (
    <StyledSummary>
      <PizzaDemo />
      <Recipe customPizza={customPizza} />

      <Container>
        <SizeSelect
          item={customPizza}
          size={customPizza.size}
          setSize={selectSize}
        />
      </Container>

      <Price>$ {SizePrice(customPizza)[customPizza.selectedSize]}</Price>

      <Container>
        <Button
          onClick={() => {
            if (customPizza.topping.length < 3) {
              toast.error("Please select at least 3 toppings.");
              return;
            }
            AddOrderCustom();
            toast.success(`Your pizza was added successfully`);
          }}
        >
          Add to Cart
        </Button>
      </Container>
    </StyledSummary>
  );
}

export default CustomPizzaSummary;

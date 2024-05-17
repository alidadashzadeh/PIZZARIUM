import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import OrderItem from "../features/order/OrderItem";
import OrderSummary from "../features/order/OrderSummary";
import Process from "../features/order/Process";
import EmptyOrderList from "../features/order/EmptyOrderList";
import SignaturePizzaOrderItem from "../features/order/SignaturePizzaOrderItem";
import CreatePizzaOrderItem from "../features/order/CreatePizzaOrderItem";
import DrinkOrderItem from "../features/order/DrinkOrderItem";

const StyledOrder = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const H2 = styled.h2`
  padding: 2rem;
`;

const OrderItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

function Order() {
  const { order: currentOrder } = useOrder();

  if (currentOrder.length === 0) return <EmptyOrderList />;

  return (
    <>
      <Process step="cart" />
      <H2>Shopping Cart</H2>
      <StyledOrder>
        <OrderItemsList>
          {currentOrder
            ?.filter?.((item) => item.isSignaturePizza)
            ?.map((el) => {
              return <SignaturePizzaOrderItem key={el.id} item={el} />;
            })}
          {currentOrder
            ?.filter?.((item) => item.isCustomPizza)
            ?.map((el) => {
              return <CreatePizzaOrderItem key={el.id} item={el} />;
            })}
          {currentOrder
            ?.filter?.((item) => item.isDrink)
            ?.map((el) => {
              return <DrinkOrderItem key={el.id} item={el} />;
            })}
        </OrderItemsList>
        <div>
          <OrderSummary step="cart" />
        </div>
      </StyledOrder>
    </>
  );
}

export default Order;

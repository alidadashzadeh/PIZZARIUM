import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import OrderItem from "./OrderItem";
import OrderSummary from "./OrderSummary";
import Process from "./Process";
import EmptyOrderList from "./EmptyOrderList";

const StyledOrder = styled.div`
  display: flex;

  /* justify-content: space-between; */
  /* padding: 4rem; */
`;

const OrderItemsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  width: 60%;
  flex: 2;
`;

function Order() {
  const { order: currentOrder } = useOrder();

  return (
    <>
      <Process step="cart" />
      <StyledOrder>
        {currentOrder.length === 0 ? (
          <EmptyOrderList />
        ) : (
          <OrderItemsList>
            <h2>My Shopping Cart</h2>
            {currentOrder
              ?.filter?.((item) => item.isSignaturePizza)
              ?.map((el) => {
                return <OrderItem key={el.id} item={el} />;
              })}
            {currentOrder
              ?.filter?.((item) => item.isCustomPizza)
              ?.map((el) => {
                return <OrderItem key={el.id} item={el} />;
              })}
            {currentOrder
              ?.filter?.((item) => item.isDrink)
              ?.map((el) => {
                return <OrderItem key={el.id} item={el} />;
              })}
          </OrderItemsList>
        )}
        <OrderSummary step="cart" />
      </StyledOrder>
    </>
  );
}

export default Order;

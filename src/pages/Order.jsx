import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import OrderSummary from "../features/order/OrderSummary";
import Process from "../features/order/Process";
import EmptyOrderList from "../features/order/EmptyOrderList";
import SignaturePizzaOrderItem from "../features/order/SignaturePizzaOrderItem";
import CustomPizzaOrderItem from "../features/order/CustomPizzaOrderItem";
import DrinkOrderItem from "../features/order/DrinkOrderItem";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

const StyledOrder = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const H2 = styled.h2`
  font-size: 20;
  font-weight: 700;
  padding: 1rem 2rem;
`;

const OrderItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
  }
`;

function Order() {
  const { order: currentOrder } = useOrder();

  if (currentOrder.length === 0) return <EmptyOrderList />;

  return (
    <PageTransition>
      <Process step="cart" />
      <H2>Shopping Cart</H2>
      <StyledOrder>
        <OrderItemsList as={motion.div} layout>
          <AnimatePresence>
            {currentOrder
              ?.filter?.((item) => item.isSignaturePizza)
              ?.map((el) => {
                return <SignaturePizzaOrderItem key={el.id} item={el} />;
              })}
            {currentOrder
              ?.filter?.((item) => item.isCustomPizza)
              ?.map((el) => {
                return <CustomPizzaOrderItem key={el.id} item={el} />;
              })}
            {currentOrder
              ?.filter?.((item) => item.isDrink)
              ?.map((el) => {
                return <DrinkOrderItem key={el.id} item={el} />;
              })}
          </AnimatePresence>
        </OrderItemsList>
        <OrderSummary step="cart" />
      </StyledOrder>
    </PageTransition>
  );
}

export default Order;

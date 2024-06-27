import { useUser } from "../features/auth/useUser";
import { useOrders } from "../features/order/useOrders";
import { styled } from "styled-components";
import ReceiptItem from "../ui/ReceiptItem";
import Spinner from "../ui/Spinner";
import { totalOrderCost } from "../utils/orderCalculations";
import { useSingleOrder } from "../features/order/useSingleOrder";

const StyledReceipt = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 100vh;
  background-color: var(--color-grey-50);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Devider = styled.div`
  width: 2px;
  height: 30px;
  background-color: var(--color-grey-200);
  border-radius: 2px;
`;
const Hdevider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-grey-200);
  border-radius: 2px;
`;

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-grey-100);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
`;

const StyledSpan = styled.span`
  letter-spacing: 2px;
`;
export default function Receipt() {
  const { data: order, isLoading } = useSingleOrder();

  if (isLoading) return <Spinner />;

  const orderDate = order ? new Date(order.created_at).toLocaleString() : "";
  const OrderSubtotal = totalOrderCost(order.details).toFixed(2);
  const cardNumber = order.cardInformation.cardNumber
    .split("")
    .map((digit, i) => {
      return i < 12 ? "*" : digit;
    })
    .join("");

  return (
    <StyledReceipt>
      <VerticalFlex>
        {order.status === "preparing" ? (
          <h3>Your Order is confirmed and under Preparation.</h3>
        ) : (
          <h3>Your Order was delivered.</h3>
        )}

        <h4>OrderID# {order.id}</h4>
        <FlexItem>
          <div>Order Date: {orderDate}</div>
          <Devider />
          <div>Estimated Delivery time: 15 minutes</div>
          <Devider />
          <div>status: {order.status}</div>
        </FlexItem>
        <VerticalFlex>
          <TableHeader>
            <span></span>
            <span>title</span>
            <span>Size</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Total Price</span>
          </TableHeader>
          {order.details.map((item) => (
            <ReceiptItem item={item} key={item.id} />
          ))}
        </VerticalFlex>
      </VerticalFlex>
      <PaymentDetails>
        <h3>Payment Details</h3>

        <FlexItem>
          <div>Subtotlal</div>
          <div>{OrderSubtotal} $</div>
        </FlexItem>
        <FlexItem>
          <div>Delivery</div>
          <div>0 $</div>
        </FlexItem>
        <FlexItem>
          <div>Tax</div>
          <div>{(OrderSubtotal * 0.13).toFixed(2)} $</div>
        </FlexItem>
        <Hdevider />
        <FlexItem>
          <div>Total</div>
          <div>{(OrderSubtotal * 1.13).toFixed(2)} $</div>
        </FlexItem>
        <h3>Payment Method</h3>
        <div>Card Holder Name: {order.cardInformation.name}</div>
        <div>
          Card #<StyledSpan>{cardNumber}</StyledSpan>
        </div>
        <Hdevider />
      </PaymentDetails>
    </StyledReceipt>
  );
}

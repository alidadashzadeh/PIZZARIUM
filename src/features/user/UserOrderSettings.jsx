import { Button } from "../../ui/Button";
import { useOrders } from "../order/useOrders";
import { styled } from "styled-components";

const StyledOrders = styled.div`
  display: grid;
  grid-template-columns: 100px 300px 100px 1fr;
  gap: 1rem;
`;

function UserOrderSettings() {
  const { isLoading, data: orders } = useOrders();
  console.log(orders);
  return (
    <>
      <h2>Orders History</h2>
      <StyledOrders>
        <div>Order ID</div>
        <div>Date</div>
        <div>order #</div>
        <div>Description</div>
        {orders?.map((el) => (
          <>
            <div>{el.id}</div>
            <div>{new Date(el.created_at).toISOString()}</div>
            <div>{}</div>
            <div>
              <Button size="small">Details</Button>
            </div>
          </>
        ))}
      </StyledOrders>
    </>
  );
}

export default UserOrderSettings;

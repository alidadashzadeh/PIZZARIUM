import { Button } from "../../ui/Button";
import { useOrders } from "../order/useOrders";
import { styled } from "styled-components";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { totalOrderCost } from "../../utils/orderCalculations";

const StyledOrders = styled.div`
  display: grid;
  grid-template-columns: 100px 200px 200px 200px 1fr;
  gap: 1rem;
`;

const TableCells = styled.div`
  display: flex;
  align-items: center;
`;

function UserOrderSettings() {
  const navigate = useNavigate();
  const { isLoading, data: orders } = useOrders();
  if (isLoading) return <Spinner />;
  return (
    <>
      <h2>Orders History</h2>
      <StyledOrders>
        <div>Order ID</div>
        <div>Date</div>
        <div>order #</div>
        <div>Total Cost</div>
        <div>Go to</div>
        {orders?.map((el) => (
          <>
            <TableCells>{el.id}</TableCells>
            <TableCells>{new Date(el.created_at).toLocaleString()}</TableCells>
            <TableCells>{el.orderNumber}</TableCells>
            <TableCells>{totalOrderCost(el.details).toFixed(2)} $</TableCells>
            <div>
              <Button
                size="small"
                onClick={() => navigate(`/receipt/${el.id}`)}
              >
                Details
              </Button>
            </div>
          </>
        ))}
      </StyledOrders>
    </>
  );
}

export default UserOrderSettings;

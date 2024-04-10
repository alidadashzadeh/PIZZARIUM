import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import OrderHistoryItem from "./OrderHistoryItem";

function OrderHistory() {
	const { data: orders } = useQuery({
		queryKey: ["orders"],
		queryFn: getOrders,
	});

	return (
		<>
			<span>Order history</span>
			{orders?.map((order) => (
				<OrderHistoryItem order={order} key={order.id} />
			))}
		</>
	);
}

export default OrderHistory;

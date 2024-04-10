/* eslint-disable react/prop-types */
function OrderHistoryItem({ order }) {
	return (
		<>
			<div>{order.created_at}</div>
			<span>
				{order.description.map((item) => (
					<>
						<span>{item.title}</span>
					</>
				))}
			</span>
		</>
	);
}

export default OrderHistoryItem;

export function totalOrderCost(currentOrder) {
	const totalItems = currentOrder.reduce(function (total, cur) {
		return cur.isDrink
			? total + cur.quantity * cur.price
			: total + cur.quantity * cur.price[cur.selectedSize];
	}, 0);

	return totalItems;
}

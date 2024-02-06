export default function SizePrice(customPizza) {
	const toppingPrices = customPizza.topping.reduce(function (
		total,
		currentvalue
	) {
		return total + currentvalue.extraPrice;
	},
	0);

	const x = (
		14.99 +
		customPizza.dough.extraPrice +
		customPizza.crust.extraPrice +
		customPizza.sauce.extraPrice +
		customPizza.cheese.extraPrice +
		toppingPrices
	).toFixed(2);

	return {
		small: (x * 0.9).toFixed(2),
		medium: (x * 1).toFixed(2),
		large: (x * 1.2).toFixed(2),
		extraLarge: (x * 1.46).toFixed(2),
		partySize: (x * 1.88).toFixed(2),
	};
}

export function sizeLabel(size) {
	if (size === "small") return "Small";
	if (size === "medium") return "Medium";
	if (size === "large") return "Large";
	if (size === "extraLarge") return "Extra Large";
	if (size === "partySize") return "Party Size";
}

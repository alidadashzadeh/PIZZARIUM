/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import SizePrice from "../utils/customPizza";

const orderContext = createContext();

function OrderProvider({ children }) {
	const [order, setOrder] = useState(function () {
		const storedTodos = localStorage.getItem("order");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});

	const [customPizza, setCustomPizza] = useState({
		title: "Custom Pizza",
		dough: { extraPrice: 0, name: "Regular Dough" },
		crust: { extraPrice: 0.99, name: "Regular Thin Crust" },
		sauce: { extraPrice: 0, name: "No-Sauce" },
		cheese: { extraPrice: 1.99, name: "Diary Free Cheese" },
		topping: [],
		cook: "Regular",
		size: "Medium",
		specialInstruction: "",
		price: 17.97,
		picture: "",
		isCustomPizza: true,
		isSignaturePizza: false,
	});

	const { price, setPrice } = useState();

	useEffect(
		function () {
			localStorage.setItem("order", JSON.stringify(order));
		},
		[order]
	);

	// useEffect(
	// 	function () {
	// 		const toppingPrices = customPizza.topping.reduce(function (
	// 			total,
	// 			currentvalue
	// 		) {
	// 			return total + currentvalue.extraPrice;
	// 		},
	// 		0);

	// 		const sizeMultiplier = SizePrice(customPizza.size);
	// 		const x = (
	// 			(14.99 +
	// 				customPizza.dough.extraPrice +
	// 				customPizza.crust.extraPrice +
	// 				customPizza.sauce.extraPrice +
	// 				customPizza.cheese.extraPrice +
	// 				toppingPrices) *
	// 			sizeMultiplier
	// 		).toFixed(2);

	// 		// setCustomPizza({ ...customPizza, Price: x });
	// 	},
	// 	[customPizza]
	// );

	function addToOrder(newItem) {
		setOrder((s) => [...s, newItem]);
	}

	function increaseQuantity(id) {
		setOrder(
			order.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	}

	function decreaseQuantity(id) {
		setOrder(
			order.map((item) =>
				item.id === id
					? {
							...item,
							quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
					  }
					: item
			)
		);
	}

	function ChangeSize(id, size) {
		setOrder(
			order.map((item) =>
				item.id === id ? { ...item, selectedSize: size } : item
			)
		);
	}

	function removeItemFromOrder(id) {
		setOrder(order.filter((item) => item.id !== id));
	}

	function selectCustomDough(selectedDough) {
		setCustomPizza({
			...customPizza,
			dough: selectedDough,
		});
	}

	function selectCustomCrust(selectedCrust) {
		setCustomPizza({ ...customPizza, crust: selectedCrust });
	}
	function selectCustomSauce(selectedSauce) {
		setCustomPizza({ ...customPizza, sauce: selectedSauce });
	}
	function selectCustomCheese(selectedCheese) {
		setCustomPizza({ ...customPizza, cheese: selectedCheese });
	}
	function selectCustomTopping(selectedTopping) {
		if (customPizza.topping.some((ss) => ss.name === selectedTopping.name)) {
			setCustomPizza({
				...customPizza,
				topping: [
					...customPizza.topping.filter(
						(topping) => topping.name !== selectedTopping.name
					),
				],
			});
			return;
		}
		setCustomPizza({
			...customPizza,
			topping: [...customPizza.topping, selectedTopping],
		});
	}
	function customInstructions(specialInstructions) {
		setCustomPizza({ ...customPizza, instructions: specialInstructions });
	}

	function selectCookType(selectedCookType) {
		setCustomPizza({ ...customPizza, cook: selectedCookType });
	}
	function selectSize(selectedSize) {
		setCustomPizza({ ...customPizza, size: selectedSize });
	}
	function selectTitle(selectedTitle) {
		setCustomPizza({ ...customPizza, title: selectedTitle });
	}
	function selectInstructions(selectedInstructions) {
		setCustomPizza({
			...customPizza,
			specialInstruction: selectedInstructions,
		});
	}

	function updatePrice(receivedPrice = 0) {
		setCustomPizza({
			...customPizza,
		});
	}

	return (
		<orderContext.Provider
			value={{
				order,
				addToOrder,
				increaseQuantity,
				decreaseQuantity,
				ChangeSize,
				removeItemFromOrder,
				customPizza,
				selectCustomDough,
				selectCustomCrust,
				selectCustomSauce,
				selectCustomCheese,
				selectCustomTopping,
				customInstructions,
				selectCookType,
				selectSize,
				selectInstructions,
				selectTitle,
			}}
		>
			{children}
		</orderContext.Provider>
	);
}

function useOrder() {
	const context = useContext(orderContext);

	if (context === undefined)
		throw new Error("order provider used outside of it's scope");

	return context;
}

export { OrderProvider, useOrder };

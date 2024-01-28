/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const orderContext = createContext();

function OrderProvider({ children }) {
	const [order, setOrder] = useState(function () {
		const storedTodos = localStorage.getItem("order");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});

	const [customPizza, setCustomPizza] = useState({
		dough: "Regular Dough",
		crust: "Regular Thick Crust",
		sauce: "No-Sauce",
		cheese: "Diary Free Cheese",
		topping: [],
		cookType: "Regular",
		size: "Medium",
		price: 14.99,
	});

	useEffect(
		function () {
			localStorage.setItem("order", JSON.stringify(order));
		},
		[order]
	);

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
		if (customPizza.topping.includes(selectedTopping)) {
			setCustomPizza({
				...customPizza,
				topping: [
					...customPizza.topping.filter(
						(topping) => topping !== selectedTopping
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
		setCustomPizza({ ...customPizza, cookType: selectedCookType });
	}
	function selectSize(selectedSize) {
		setCustomPizza({ ...customPizza, size: selectedSize });
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

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
		console.log(id);
		console.log(size);
		setOrder(
			order.map((item) =>
				item.id === id ? { ...item, selectedSize: size } : item
			)
		);
	}

	function removeItemFromOrder(id) {
		setOrder(order.filter((item) => item.id !== id));
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

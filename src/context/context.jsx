import { createContext, useContext, useState } from "react";

const orderContext = createContext();
function OrderProvider({ children }) {
	const [order, setOrder] = useState(function () {
		const storedOrder = localStorage.get("order");
		return storedOrder ? JSON.parse(storedOrder) : [];
	});

	return (
		<orderContext.Provider value={(order, setOrder)}>
			{children}
		</orderContext.Provider>
	);
}

function useOrder() {
	const context = useContext(orderContext);

	if (context === undefined)
		throw new Error("order provider used outside of it's scope");
}

export { OrderProvider, useOrder };

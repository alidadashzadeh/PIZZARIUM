/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import SizePrice from "../utils/customPizza";
import toast from "react-hot-toast";

const orderContext = createContext();

function OrderProvider({ children }) {
  const [order, setOrder] = useState(function () {
    const storedTodos = localStorage.getItem("order");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [selectedAddress, setSelectedAddress] = useState("");

  const [customPizza, setCustomPizza] = useState({
    title: "Custom Pizza",
    dough: { extraPrice: 0, name: "Regular Dough" },
    crust: { extraPrice: 0.99, name: "Regular Thin Crust" },
    sauce: { extraPrice: 0, name: "No-Sauce" },
    cheese: { extraPrice: 1.99, name: "Diary Free Cheese" },
    topping: [],
    cook: "Regular",
    selectedSize: "medium",
    specialInstruction: "",
    quantity: 1,
    price: {
      small: 17.97,
      medium: 17.97,
      large: 17.97,
      extraLarge: 17.97,
      partySize: 17.97,
    },
    picture: "",
    isCustomPizza: true,
    isSignaturePizza: false,
  });

  useEffect(
    function () {
      localStorage.setItem("order", JSON.stringify(order));
    },
    [order]
  );

  function addToOrder(newItem) {
    if (
      order.some(
        (item) =>
          item.title === newItem.title &&
          item.selectedSize === newItem.selectedSize
      )
    ) {
      setOrder(
        order.map((item) =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
      return;
    }

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
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
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

    if (customPizza.topping.length >= 5) {
      toast.error("Its not a good idea to have more than 5 toppings!!");
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
    setCustomPizza({ ...customPizza, selectedSize: selectedSize });
  }
  function selectTitle(selectedTitle) {
    console.log(selectedTitle.trim());
    if (!selectedTitle.trim()) return;
    setCustomPizza({ ...customPizza, title: selectedTitle });
  }
  function selectInstructions(selectedInstructions) {
    setCustomPizza({
      ...customPizza,
      specialInstruction: selectedInstructions,
    });
  }

  function AddOrderCustom() {
    setOrder([
      ...order,
      { ...customPizza, price: SizePrice(customPizza), id: Date.now() },
    ]);
    resetCustomPizza();
  }

  function resetCustomPizza() {
    setCustomPizza({
      title: "Custom Pizza",
      dough: { extraPrice: 0, name: "Regular Dough" },
      crust: { extraPrice: 0.99, name: "Regular Thin Crust" },
      sauce: { extraPrice: 0, name: "No-Sauce" },
      cheese: { extraPrice: 1.99, name: "Diary Free Cheese" },
      topping: [],
      cook: "Regular",
      selectedSize: "medium",
      specialInstruction: "",
      quantity: 1,
      price: {
        small: 17.97,
        medium: 17.97,
        large: 17.97,
        extraLarge: 17.97,
        partySize: 17.97,
      },
      picture: "",
      isCustomPizza: true,
      isSignaturePizza: false,
    });
  }

  function addOrderDrink(newDrink) {
    if (order.some((item) => item.title === newDrink.title)) {
      setOrder(
        order.map((item) =>
          item.title === newDrink.title
            ? { ...item, quantity: item.quantity + newDrink.quantity }
            : item
        )
      );
      return;
    }
    setOrder([...order, { ...newDrink, id: Date.now() }]);
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
        AddOrderCustom,
        addOrderDrink,
        selectedAddress,
        setSelectedAddress,
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

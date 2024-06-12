import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./AppLayout";
import SignaturePizzas from "./SignaturePizzas";
import SignaturePizza from "./SignaturePizza";
import CreatePizza from "./CreatePizza";
import Drinks from "./Drinks";
import Signup from "./Signup";
import Login from "./Login";
import UserProfile from "./UserProfile";
import Home from "./Home";
import Order from "./Order";
import Deliveryinfo from "./Deliveryinfo";
import Payment from "./Payment";
import Receipt from "./Receipt";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="signature-pizzas" element={<SignaturePizzas />} />
          <Route
            path="signature-pizzas/:pizzaId"
            element={<SignaturePizza />}
          />
          <Route path="create-your-pizza" element={<CreatePizza />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="order" element={<Order />} />
          <Route path="deliveryInfo" element={<Deliveryinfo />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="/userprofile/:userId" element={<UserProfile />}></Route>
          <Route path="/receipt/:orderId" element={<Receipt />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

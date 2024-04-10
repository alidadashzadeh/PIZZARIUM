import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./pages/AppLayout";
import SignaturePizzas from "./pages/SignaturePizzas";
import CreateYourPizza from "./pages/CreateYourPizza";
import Drinks from "./pages/Drinks";
import { OrderProvider } from "./context/OrderContext";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

import GeneralSettings from "./features/user/GeneralSettings";
import UserPasswordSettings from "./features/user/UserPasswordSettings";
import UserAddressSettings from "./features/user/UserAddressSettings";
import UserOrderSettings from "./features/user/UserOrderSettings";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { staleTime: 60000 },
	},
});
function App() {
	return (
		<OrderProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<AppLayout />}>
							<Route
								index
								element={<Navigate replace to="signature-pizzas" />}
							/>
							<Route path="signature-pizzas" element={<SignaturePizzas />} />
							<Route path="create-your-pizza" element={<CreateYourPizza />} />
							<Route path="drinks" element={<Drinks />} />
						</Route>
						<Route path="/Checkout" element={<Checkout />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/user" element={<UserProfile />}>
							<Route
								index
								element={<Navigate replace to="generalsettings" />}
							/>
							<Route path="generalsettings" element={<GeneralSettings />} />
							<Route
								path="passwordsettings"
								element={<UserPasswordSettings />}
							/>
							<Route path="addresssettings" element={<UserAddressSettings />} />
							<Route path="ordersettings" element={<UserOrderSettings />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: { duration: 3000 },
					error: {
						duration: 4000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</OrderProvider>
	);
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./pages/AppLayout";
import SignaturePizzas from "./pages/SignaturePizzas";
import CreateYourPizza from "./pages/CreateYourPizza";
import Drinks from "./pages/Drinks";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { staleTime: 60 * 1000 },
	},
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route path="signature-pizzas" element={<SignaturePizzas />} />
						<Route path="create-your-pizza" element={<CreateYourPizza />} />
						<Route path="drinks" element={<Drinks />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;

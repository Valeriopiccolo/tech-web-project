import Layout from "@/Layout";
import Dashboard from "@/components/pages/Dashboard";
import Collection from "@/components/pages/Collection";
import Payment from "./pages/Payment";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/explore" element={<Collection />} />
					<Route path="/buy/:id" element={<Payment />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

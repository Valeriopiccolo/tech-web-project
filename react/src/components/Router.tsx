import Layout from "@/Layout";
import Dashboard from "@/components/pages/Dashboard";
import Collection from "@/components/pages/Collection";
import Payment from "./pages/Payment";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewGame from "./pages/NewGame";
import ModifyAccount from "./pages/ModifyAccount";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/explore" element={<Collection />} />
					<Route path="/buy/:id" element={<Payment />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/addGame" element={<NewGame />} />
					<Route path="/updateAccount" element={<ModifyAccount />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

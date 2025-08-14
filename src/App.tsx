import { Header } from "../src/components/Header/Header";

import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./Router";

function App() {
	return (
		<>
			<Header />
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;

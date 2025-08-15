import { Header } from "../src/components/Header/Header";

import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./Router";

export const App = () => {


	return (
		<>
			<Header />
			<RouterProvider router={router}></RouterProvider>
		</>
	);

}

export default App;

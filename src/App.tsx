import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./Router";
import { RecipeList } from "./components/RecipeList";

export const App = () => {


	return (
		<>
		<RouterProvider router={router}></RouterProvider>
		<RecipeList />
		</>
	);

}

export default App;

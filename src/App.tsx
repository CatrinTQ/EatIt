import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./Router";
// import { OneRecipe } from "./components/OneRecipe";
// import { RecipePage } from "./components/RecipePage";


export const App = () => {


	return (
		<>
		<RouterProvider router={router}></RouterProvider>
		
		</>
	);

}

export default App;

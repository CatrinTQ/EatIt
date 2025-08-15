import { createBrowserRouter } from 'react-router-dom';
// ADD HOME HERE
import { Error } from "./pages/Error";
import { Layout } from "./pages/Layout";
// import { RecipeCard } from './components/RecipeCard';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			// {
			// 	path: "/",
			// 	element: <RecipePage />,
			// },
			// {
			//     path: "/recip/:id", 
        	// 	element: <RecipeCard />,
      		// },
		],
	},
]);

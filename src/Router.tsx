import { createBrowserRouter } from 'react-router-dom';
// ADD HOME HERE
import { Error } from "./pages/Error";
import { Layout } from "./pages/Layout";
import { RecipePage } from './components/RecipePage';
import { OneRecipe } from './components/OneRecipe';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <RecipePage />,
			},
			{
			    path: "/recipe/:id", 
        		element: <OneRecipe />,
      		},
		],
	},
]);

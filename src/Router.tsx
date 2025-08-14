import { createBrowserRouter } from 'react-router-dom';
// ADD HOME HERE
import { Error } from "./pages/Error";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			// {
			// 	path: "/",
			// 	element: <Home />, // NOT ORKING YET
			// },
		],
	},
]);

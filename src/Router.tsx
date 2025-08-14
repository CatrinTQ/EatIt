import { createBrowserRouter } from 'react-router-dom';
// import { About } from "./pages/About";
// import { Home } from "./pages/Home";
// import { Error } from "./pages/Error";
// import { Layout } from "./pages/Layout/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/recepies",
				element: <About />,
			},
		],
	},
]);

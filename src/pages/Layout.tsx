import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <>
      <header>
		<Header />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

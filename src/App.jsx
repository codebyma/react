import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lifting from "./components/lifting/Lifting";
import LiftingHome from "./components/lifting/LiftingHome";
import LiftingMenu from "./components/lifting/LiftingMenu";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import List from "./pages/List/List";
import Stock from "./pages/Stock/Stock";
import AccordionPage from "./pages/AccordionPage";
import TextPage from "./pages/TextPage";
import IsaAccount from "./pages/Stock/IsaAccount";
import AccountStocks from "./pages/Stock/AccountStocks";
import ButtonGuide from "./pages/ButtonGuide";
import Test from "./pages/Test";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "page/User", element: <User /> },
        { path: "page/List", element: <List /> },
        { path: "components/lifting/Lifting", element: <Lifting /> },
        { path: "components/lifting/LiftingHome", element: <LiftingHome /> },
        { path: "components/lifting/LiftingMenu", element: <LiftingMenu /> },
        {
          path: "page/Stock/Stock",
          element: <Stock />,
          children: [
            { index: true, element: <IsaAccount /> },
            { path: "Isa", element: <IsaAccount /> },
            { path: "AccountStocks", element: <AccountStocks /> },
          ],
        },
        { path: "page/ButtonGuide", element: <ButtonGuide /> },
        { path: "page/TextPage", element: <TextPage /> },
        { path: "page/AccordionPage", element: <AccordionPage /> },
        { path: "page/Test", element: <Test /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
    future: {
      v7_startTransition: true, // ✅ v7 방식 미리 적용
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
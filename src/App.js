import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Router from "./Router";
import SecondContext from "./Context/SecondContext";
import Login from "./User-SignIn/Login";
import PurchaseDone from "./Checkout/PurchaseDone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/login", element: <Login /> },
      { path: "/purchase", element: <PurchaseDone /> },
    ],
  },
]);

function App() {
  return (
    <SecondContext>
      <RouterProvider router={router} />
    </SecondContext>
  );
}

export default App;

// {
//   path: "/checkout",
//   element: <Checkout />,
// },

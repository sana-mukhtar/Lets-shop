import Navbar from "./features/navbar/Navbar";
import CartPage from "./features/pages/CartPage";
import CheckOutPage from "./features/pages/CheckOutPage";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import ProductDetailsPage from "./features/pages/ProductDetailsPage";
import SignUpPage from "./features/pages/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/payment",
    element: <h1 className="text-3xl">payment page</h1>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
]);

export default function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <LoginPage></LoginPage> */}
      <RouterProvider router={router} />
    </>
  );
}

import React, { Suspense, lazy } from "react";
import "./index.css";
// import Login
import ReactDOM from "react-dom/client";
import { Header, Title } from "./Components/HeaderTag";
import { Body } from "./Components/Body";
import { SearchBar } from "./Components/Search";
import { Footer } from "./Components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import { useRouteError, Outlet } from "react-router-dom";
import Login from "./Components/Login";

// import Login

import { SpeedInsights } from "@vercel/speed-insights/react";

import MenuCategory from "./Components/MenuCategory";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/reduxstore";
import Cart from "./Components/Cart";
import GoToTop from "./Components/GoToTop";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
// import Instamart from "./src/Components/Instamart";

const Instamart = lazy(() => import("./Components/Instamart"));

/**
 *
 * Foodiezz
 *
 *  - Header
 *    -Logo (image)
 *    -Nav-items (Right Side)
 *    -Cart
 *
 *  -Body
 *    -Search
 *    -RestaurantList
 *        -RestaurantCard
 *          -image
 *          -Name
 *          -Rating
 *          - ...
 *  -Footer
 *    -Links
 *    -CopyRights
 *
 */

Kommunicate.init("751d78371567369de15bdd41b9f787c6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <GoToTop />
      <Footer />
      <SpeedInsights />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/restaurant/:id",
        element: <MenuCategory />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

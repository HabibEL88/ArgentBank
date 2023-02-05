import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { store } from "./features/user/userSlice"
import { Provider } from 'react-redux'

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile"

import Header from "./components/Header";
import Footer from "./components/Footer";

import ProtectedRoutes from "./components/ProtectedRoutes";

import { saveState } from "features/browser/browserStorage";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


store.subscribe(() => {
  saveState({
    user:store.getState().user
  });
})


const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        element: <ProtectedRoutes/>,
        children: [
          {
            path: "/profile",
            element: <Profile/>
          }
        ]
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

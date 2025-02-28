import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Layout from "./layout.jsx";
import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
// import Register from './pages/Register.jsx'
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import { Provider } from "react-redux";
import { store } from "./Config/redux/store/store.js";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

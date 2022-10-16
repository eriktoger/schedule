import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home, Meditation, Stretching, Training } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/meditation",
    element: <Meditation />,
  },
  {
    path: "/stretching",
    element: <Stretching />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

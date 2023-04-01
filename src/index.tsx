import React from "react";
import "./index.css";
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
    <div className="flex flex-col justify-center items-center h-screen bg-winter bg-no-repeat bg-cover">
      <div className="bg-slate-200/70 rounded-lg p-2">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);

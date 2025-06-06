import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import {
  Home,
  Meditation,
  Stretching,
  Training,
  BreakActivites,
} from "./pages";
import { MeditationTimer } from "./pages/meditation";

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
    path: "/meditationTimer",
    element: <MeditationTimer />,
  },
  {
    path: "/stretching",
    element: <Stretching />,
  },
  {
    path: "/break-activities",
    element: <BreakActivites />,
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

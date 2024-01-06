import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";

const div = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(div);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

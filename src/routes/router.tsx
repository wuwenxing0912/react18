import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoutes } from "./welcomeRoutes";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [welcomeRoutes],
  },
]);

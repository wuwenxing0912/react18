import { NavLink, Outlet, createBrowserRouter } from "react-router-dom";
import { Welcome1 } from "../pages/Welcome1";
import { Welcome2 } from "../pages/Welcome2";
import { Welcome3 } from "../pages/Welcome3";
import { Welcome4 } from "../pages/Welcome4";
import { RedirectToWelcome1 } from "../components/RedirectToWelcome1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    // 知识点：errorElement 用来指定找不到匹配时的渲染组件
    errorElement: <RedirectToWelcome1 />,
    children: [
      { index: true, element: <div>Home</div> },
      {
        path: "welcome",
        element: <Outlet />,
        children: [
          { index: true, element: <div>Welcome</div> },
          {
            path: "1",
            element: <Welcome1 />,
          },
          {
            path: "2",
            element: <Welcome2 />,
          },
          {
            path: "3",
            element: <Welcome3 />,
          },
          {
            path: "4",
            element: <Welcome4 />,
          },
        ],
      },
    ],
  },
]);

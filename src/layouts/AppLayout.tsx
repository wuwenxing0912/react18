import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = (Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

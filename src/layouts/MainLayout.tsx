import { Navigate, Outlet } from "react-router-dom";
export const MainLayout: React.FC = () => {
  const hasReadWelcomes = localStorage.getItem("hasReadWelcomes");
  if (hasReadWelcomes) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};

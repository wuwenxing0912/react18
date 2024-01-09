import { Navigate } from "react-router-dom";
export const Root: React.FC = () => {
  const hasReadWelcomes = localStorage.getItem("hasReadWelcomes");
  if (hasReadWelcomes) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/welcome/1" />;
  }
};

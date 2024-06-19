import { useAuthCheck } from "../../hooks/useAuthCheck";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isUserAuthenticated = useAuthCheck();

  // If the user is authenticated, render the child routes, otherwise return null.
  return isUserAuthenticated.state.isAuthenticated ? (
    <Outlet />
  ) : null;
};
export default ProtectedRoute;

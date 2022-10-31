import { Navigate, useLocation, Outlet} from "react-router-dom";
import { useAuth } from "../context/auth.context";

export function PrivateRoute() {
  const { state} = useAuth();
  const location = useLocation();
  return state.tokenFromLocal ? <Outlet /> : <Navigate to="/signin" state={{ from: location?.pathname }} replace />;
}
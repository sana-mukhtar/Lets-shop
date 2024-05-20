import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  isAdmin?: boolean;
  adminRoute?: boolean;
  redirect?: string;
}
export default function ProtectedRoute({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isAdmin,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  adminRoute,
  isAuthenticated,
  redirect = "/",
}: Props) {
  if (!isAuthenticated) <Navigate to={redirect} />;
  return children ? children : <Outlet />;
}

import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  isAdmin?: boolean;
  adminRoute?: boolean;
  redirect?: string;
}
export default function ProtectedRoute({
  children,
  adminRoute,
  isAdmin,
  isAuthenticated,
  redirect = "/",
}: Props) {
  if (!isAuthenticated) <Navigate to={redirect} />;
  return children;
}

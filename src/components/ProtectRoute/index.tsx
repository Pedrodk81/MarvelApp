import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ISession } from "../../types/Session";
import { ProtectedRouteProps } from "../../types/Auth";

export default function ProtectedRoute({
  outlet,
}: ProtectedRouteProps) {
  const session = useSelector(({session}: {session: ISession}) => session);
  
  if (session.isLogged) {
    return outlet;
  } else {
    return <Navigate to="/signin" />
  }
}
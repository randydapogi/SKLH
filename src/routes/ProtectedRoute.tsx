import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) return null;
  if (!session) return <Navigate to="/" replace />;

  return <Outlet />;
}
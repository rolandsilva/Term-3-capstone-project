import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

// hook to check if user is authenticated. If not, redirect to login page.

export function useAuthCheck(redirectUrl = "/login") {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (!auth.state.isAuthenticated) {
      navigate(redirectUrl);
    }
  }, [auth.state.isAuthenticated, navigate]);

  return auth;
}

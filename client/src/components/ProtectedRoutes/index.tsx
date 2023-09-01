import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  //REACT ROUTER
  const navigate = useNavigate();
  const location = useLocation();

  //LOGIC
  const routeProtector = () => {
    const username = localStorage.getItem("username");
    if (!username && location.pathname !== "/login")
      navigate("/login", { replace: true });
    else if (
      username &&
      (location.pathname === "/login" || location.pathname === "/")
    )
      navigate("/app", { replace: true });
  };

  //LIFE CYCLE HOOKS
  useEffect(() => {
    // "/" path is for splash screen
    if (location.pathname !== "/") {
      routeProtector();
    } else {
      setTimeout(routeProtector, 1000);
    }
  }, [location.pathname]);

  return <Outlet />;
}

export default ProtectedRoutes;

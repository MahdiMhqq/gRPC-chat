import { createBrowserRouter } from "react-router-dom";

import LoginPage from "pages/Login";
import AppLayout from "components/AppLayout";
import ChatPage from "pages/Chat";
import ProfilePage from "pages/Profile";
import ErrorPage from "pages/Error";
import SplashPage from "pages/Splash";
import ProtectedRoutes from "components/ProtectedRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SplashPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <ChatPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default routes;

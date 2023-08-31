import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";

function AppLayout() {
  return (
    <>
      <Navigation className="fixed z-50 left-0 right-0 top-0" />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";

function AppLayout() {
  return (
    <>
      <Navigation className="fixed top-0 left-0 right-0 z-50" />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;

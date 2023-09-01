import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer
        className={"!p-6 toastContainerBackdrop"}
        limit={3}
        newestOnTop
        rtl={true}
        position="top-center"
        closeOnClick
        autoClose={5000}
        toastClassName="!rounded-lg shadow-lg border border-linePrimary !mb-2 !font-sans"
      />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

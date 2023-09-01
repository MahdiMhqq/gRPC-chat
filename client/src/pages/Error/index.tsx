import { useRouteError } from "react-router-dom";

import Navigation from "components/Navigation";

function ErrorPage() {
  //ERROR
  const error = useRouteError();

  //VARIABLES
  let title = "خطا!";
  let message = "متاسفانه مشکلی رخ داده است! بعدا تلاش کنید...";

  if (
    error &&
    typeof error === "object" &&
    "status" in error &&
    typeof error.status === "number" &&
    error?.status === 404
  ) {
    title = "۴۰۴";
    message = "صفحه مورد نظر وجود ندارد!";
  }

  return (
    <>
      <Navigation />
      <main className="p-4">
        <h1 className="text-center text-[6rem] font-bold text-primary mt-8">
          {title}
        </h1>
        <div className="text-center text-sub1-medium text-tPrimary ">
          {message}
        </div>
      </main>
    </>
  );
}

export default ErrorPage;

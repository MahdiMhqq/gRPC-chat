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
      <h1>{title}</h1>
      <div>{message}</div>
    </>
  );
}

export default ErrorPage;

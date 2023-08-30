import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  //NEXT ROUTER
  const navigate = useNavigate();

  //LIFE CYCLE HOOKS
  useEffect(() => {
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1000);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-sBackground select-none pointer-events-none">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-1/2 md:w-1/3 max-w-md">
        <div className="relative w-full aspect-[2] mx-auto gentle-up">
          <img
            className={"w-full h-full"}
            src="/snappFoodLogoBig.png"
            alt={"snappFood"}
          />
        </div>
      </div>
      <h6 className="absolute left-1/2 -translate-x-1/2 bottom-24 text-h2-medium text-tPrimary text-center">
        چت روم
      </h6>
      <p className="absolute left-1/2 -translate-x-1/2 bottom-12 text-tPrimary">
        ورژن 0.1
      </p>
    </div>
  );
}

export default SplashPage;

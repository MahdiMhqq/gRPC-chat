function SplashPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden pointer-events-none select-none bg-sBackground">
      <div className="absolute w-1/2 max-w-md left-1/2 -translate-x-1/2 top-1/3 md:w-1/3">
        <div className="relative w-full aspect-[2] mx-auto gentle-up">
          <img
            className={"w-full h-full"}
            src="/snappFoodLogoBig.png"
            alt={"snappFood"}
          />
        </div>
      </div>
      <h6 className="absolute text-center left-1/2 -translate-x-1/2 bottom-24 text-h2-medium text-tPrimary">
        چت روم
      </h6>
      <p className="absolute left-1/2 -translate-x-1/2 bottom-12 text-tPrimary">
        ورژن 0.1
      </p>
    </div>
  );
}

export default SplashPage;

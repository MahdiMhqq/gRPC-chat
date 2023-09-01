import BasicButton from "components/BasicButton";
import Input from "components/Input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitHandler } from "./services";

export interface IFormSchema {
  username: string;
}

function LoginPage() {
  //REACT ROUTER
  const navigate = useNavigate();

  //STATES
  const [formData, setFormData] = useState<IFormSchema>({ username: "" });
  const [formErrors, setFormErrors] = useState<IFormSchema>({
    username: "",
  });

  return (
    <main className="p-4">
      <img
        className={"w-1/2 xs:w-1/4 max-w-[9rem] aspect-[2] mx-auto mt-6 mb-10"}
        src="/snappFoodLogoBig.png"
        alt={"snappFood"}
      />
      <h1 className="text-h2-medium text-tPrimary mt-4">به چت روم خوش آمدید</h1>
      <p className="text-sub2 text-tDisabled mt-2">
        برای ورود به چت نام کاربری خود را وارد کنید
      </p>
      <form
        className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(formData, setFormErrors, navigate);
        }}
      >
        <Input
          classNames={{ wrapper: "md:basis-3/4 w-full", input: "py-3" }}
          placeholder="نام کاربری..."
          value={formData.username}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, username: e.target.value }));
            setFormErrors((prev) => ({ ...prev, username: "" }));
          }}
          error={formErrors.username}
        />
        <BasicButton type="submit" className="md:basis-1/4 w-full" size="xl">
          ورود
        </BasicButton>
      </form>
    </main>
  );
}

export default LoginPage;

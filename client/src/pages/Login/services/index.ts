import { schema } from "./schema";
import { client } from "proto/client";
import { addNotification } from "utils/notifications";

import type { NavigateFunction } from "react-router-dom";
import type { IFormSchema } from "..";

export const submitHandler = (
  formData: IFormSchema,
  setFormErrors: React.Dispatch<React.SetStateAction<IFormSchema>>,
  navigate: NavigateFunction
) => {
  if (schema.isValidSync(formData)) {
    client
      .join({
        id: crypto.randomUUID().toString(),
        name: formData.username,
      })
      .then((res) => {
        localStorage.setItem("username", formData.username);
        console.log("[JOINED] ", res.response.msg);
        addNotification(
          "success",
          "شما با موفقیت به چت روم وارد شدید!",
          "LOGIN_SUCCESS"
        );
        navigate("/app");
      })
      .catch((err) => {
        console.error("[ERROR] ", err);
        const error = err?.message;
        setFormErrors((prev) => ({ ...prev, username: error }));
      });
  } else {
    setFormErrors((prev) => ({
      ...prev,
      username: schema.validateSync(formData).username,
    }));
  }
};

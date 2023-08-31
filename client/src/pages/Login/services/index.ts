import type { NavigateFunction } from "react-router-dom";
import type { IFormSchema } from "..";
import { schema } from "./schema";

export const submitHandler = (
  formData: IFormSchema,
  setFormErrors: React.Dispatch<React.SetStateAction<IFormSchema>>,
  navigate: NavigateFunction
) => {
  if (schema.isValidSync(formData)) {
    localStorage.setItem("username", formData.username);
    navigate("/app");
  } else {
    setFormErrors((prev) => ({
      ...prev,
      username: schema.validateSync(formData).username,
    }));
  }
};

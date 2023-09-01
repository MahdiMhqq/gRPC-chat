import { object, string } from "yup";

export const schema = object({
  username: string()
    .min(4, "نام کاربری باید حذاقل ۴ حرف باشد")
    .max(16, "نام کاربری باید حذاکثر ۱۶ حرف باشد")
    .matches(/^\S*$/, "نام کاربری نباید شامل فاصله باشد.")
    .matches(
      /^[\d]*[a-zA-Z_][a-zA-Z\d_]*$/,
      "نام کاربری باید متشکل از حروف باشد"
    )
    .required("وارد کردن نام کاربری الزامیست!"),
});

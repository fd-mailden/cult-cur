import * as yup from "yup";

const schemaFormMail = yup.object().shape({
  user_name: yup
    .string()
    .matches(/^[А-ЯЁ][а-яё]+$/)
    .max(13)
    .required(),
  phone: yup.string().min(10).max(13).required(),
  user_email:  yup.string().email().required(),
});

export default schemaFormMail;

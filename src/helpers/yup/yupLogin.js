import * as yup from "yup";

const schemaLogin = yup.object().shape({
  login: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default schemaLogin;

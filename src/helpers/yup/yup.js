import * as yup from "yup";
const schemaContactForm = yup.object().shape({
  user_name: yup.string().min(2).max(13).required(),
  phone: yup.string().min(10).max(13).required(),
});

export default schemaContactForm;

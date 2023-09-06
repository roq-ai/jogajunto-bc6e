import * as yup from 'yup';

export const matchValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  court_id: yup.string().nullable().required(),
});

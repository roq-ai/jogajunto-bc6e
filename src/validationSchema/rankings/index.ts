import * as yup from 'yup';

export const rankingValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  fair_play: yup.number().integer().required(),
  playability: yup.number().integer().required(),
  punctuality: yup.number().integer().required(),
  availability: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});

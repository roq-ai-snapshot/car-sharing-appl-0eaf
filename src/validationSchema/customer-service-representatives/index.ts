import * as yup from 'yup';

export const customerServiceRepresentativeValidationSchema = yup.object().shape({
  employee_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

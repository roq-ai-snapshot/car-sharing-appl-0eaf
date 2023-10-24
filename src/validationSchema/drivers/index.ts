import * as yup from 'yup';

export const driverValidationSchema = yup.object().shape({
  license_number: yup.string().required(),
  license_expiry_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});

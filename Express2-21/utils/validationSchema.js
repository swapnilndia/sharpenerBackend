import * as yup from 'yup';

// Define the validation schema for the Appointment model
export const productSchema = yup.object().shape({
  title: yup.string().required(),
  price: yup.number().nullable().positive(),
  imageUrl: yup.string().required(),
  description: yup.string().required()
});

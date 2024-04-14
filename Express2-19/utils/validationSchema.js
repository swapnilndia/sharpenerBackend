import * as yup from 'yup';

// Define the validation schema for the Appointment model
export const expenseSchema = yup.object().shape({
    description: yup.string().required('Description is required'),
    amount: yup.number().positive().required('Amount is required'),
    category: yup.string().required('Category is required'),
    date: yup.date().required('Date is required')
  });


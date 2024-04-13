import * as yup from 'yup';

// Define the validation schema for the Appointment model
export const appointmentSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    appointment_date: yup.date().required('Appointment date is required'),
    appointment_time: yup.string().required('Appointment time is required'),
    service: yup.string().required('Service is required'),
    provider: yup.string(),
    location: yup.string(),
    notes: yup.string(),
    confirmation: yup.boolean().required('Confirmation is required')
});


import { productSchema } from "../utils/validationSchema.js";



export const validateProduct = async (req, res, next) => {
    console.log('hello')
    try {
        // Validate request body against the schema
        await productSchema.validate(req.body, { abortEarly: false });
        // If validation succeeds, proceed to the next middleware
        next();
    } catch (error) {
        // If validation fails, send error response
        const errors = {};
        if (error.inner) {
            error.inner.forEach(err => {
                errors[err.path] = err.message;
            });
        }
        // Send error response with formatted error messages
        return res.status(400).json({ errors });

    }
};
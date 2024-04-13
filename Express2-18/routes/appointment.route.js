import { Router } from "express";
import { validateAppointment } from "../middleware/validationMiddleware.js";
import { create_Appointment, delete_Specific_Appointment, get_All_Appointment, get_Specific_Appointment, update_Specific_Appointment } from "../controller/appointment.controller.js";

const router = Router()

router.post('/', validateAppointment, create_Appointment)
router.get('/', get_All_Appointment)
router.get('/:id',  get_Specific_Appointment)
router.delete('/:id',  delete_Specific_Appointment)
router.put('/:id',  update_Specific_Appointment)

export default router
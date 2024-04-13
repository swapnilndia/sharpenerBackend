import Appointment from "../models/appointment.model.js";

export const create_Appointment = async (req, res) => {
    try {
        const appointmentObj = req.body
        const createAppointment = await Appointment.create(appointmentObj)
        if (!createAppointment) {
            res.status(500).json({ msg: 'Something went wrong' })
        }
        res.status(201).json({ msg: 'Appoint created succesfully', createAppointment })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_All_Appointment = async (req, res) => {
    try {
        const appointmentList = await Appointment.findAll()
        if (!appointmentList) {
            res.status(404).json({ msg: 'Appointment list not found' })
        }
        res.status(200).json({ msg: 'Appointment List fetched successfully', appointmentList })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_Specific_Appointment = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const appointment = await Appointment.findByPk(id)
        console.log(appointment)
        if (!appointment) {
            res.status(404).json({ msg: 'Appointment Not Found' })
        }
        res.status(200).json({ msg: 'Appointment fetched successfully', appointment })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const delete_Specific_Appointment = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const deletedAppointment = await Appointment.destroy({ where: { id } })
        console.log(deletedAppointment)
        if (!deletedAppointment) {
            res.status(404).json({ msg: 'Appointment Not Found' })
        }
        res.status(200).json({ msg: 'Appointment deleted successfully', deletedAppointment })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const update_Specific_Appointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointmentObj = req.body;

        const [rowsAffected] = await Appointment.update(appointmentObj, { where: { id } });

        if (rowsAffected === 0) {
            return res.status(404).json({ msg: 'Appointment Not Found' });
        }

        const updatedAppointment = await Appointment.findOne({ where: { id } });

        return res.status(200).json({ msg: 'Appointment updated successfully', updatedAppointment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
};

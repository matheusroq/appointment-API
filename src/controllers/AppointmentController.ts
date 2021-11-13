import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

class AppointmentController {
    async index(req: Request, res: Response) {
        try {
            const appointments = await Appointment.findAll();
            return res.json(appointments);
        } catch (e) {
            return res.status(400).json(e)
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            } else {
                const appointment = await Appointment.findByPk(id) as Appointment;
                return res.json(appointment);
            }
        } catch (e) {
            res.status(400).json(e)
        }
    }
    async store(req: Request, res: Response) {
        try {

            const appointment = await Appointment.create(req.body);
            return res.json(appointment);
        } catch (e) {
            res.status(400).json(e)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            }

            const appointment = await Appointment.findByPk(id);

            if (!appointment) {
                return res.status(400).json({
                    errors: ['Appointment doesn\'t exists.'],
                })
            }

            const updatedAppointment = await Appointment.update(req.body, {
                where: {
                    id
                }
            });
            return res.json(updatedAppointment);

        } catch (e) {
            res.status(400).json(e)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            }

            const appointment = await Appointment.findByPk(id) as Appointment;

            if (!appointment) {
                return res.status(400).json({
                    errors: ['Appointment doesn\'t exists.'],
                })
            }

            await appointment.destroy();
            return res.json({
                message: "Appointment was deleted",
            });

        } catch (e) {
            res.status(400).json(e)
        }
    }

}

export default new AppointmentController();
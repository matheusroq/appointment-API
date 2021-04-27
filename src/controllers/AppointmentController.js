import Appointment from '../models/Appointment';

class AppointmentController {
    async index(req, res) {
       try{ 
        const appointments = await Appointment.findAll();
        return res.json(appointments);
    } catch(e) {
        return res.status(400).json(e)
    }
    }

    async show(req, res) {
        try{ 
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            } else {
                const appointment = await Appointment.findByPK(id);
                return res.json(appointment);
            }
        } catch(e) {
            res.status(400).json(e)
        }
    }
    async store(req, res) {
        try{ 
            
            const appointment = await Appointment.create(req.body);
            return res.json(appointment);
        } catch(e) {
            res.status(400).json(e)
        }
    }
    async update(req, res) {
        try{
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            } 

            const appointment = await Appointment.findByPK(id);

            if(!appointment) {
                return res.status(400).json({
                    errors: ['Appointment doesn\'t exists.'],
                })
            }

            const updatedAppointment = await Appointment.update(req.body);
            return res.json(updatedAppointment);

        } catch(e) {
            res.status(400).json(e)
        }
    }
    async delete(req, res) {
        try{
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                })
            } 

            const appointment = await Appointment.findByPK(id);

            if(!appointment) {
                return res.status(400).json({
                    errors: ['Appointment doesn\'t exists.'],
                })
            }

            await Appointment.destroy(appointment);
            return res.json({
                message: "Appointment was deleted",
            });

        } catch(e) {
            res.status(400).json(e)
        }
    }

}

export default new AppointmentController();
import { Router } from 'express';

const router = new Router();

import appointmentController from './src/controllers/AppointmentController';

//appointments
router.get('/appointments', appointmentController.index);
router.get('/appointment/:id', appointmentController.show);
router.post('/appointment', appointmentController.store);
router.put('/appointment/:id', appointmentController.update);
router.delete('/appointment/:id', appointmentController.delete);

export default router;
import { Router } from 'express';

const router = new Router();

import appointmentController from './src/controllers/AppointmentController';
import userController from './src/controllers/UserController';

//appointments
router.get('/appointments', appointmentController.index);
router.get('/appointment/:id', appointmentController.show);
router.post('/appointment', appointmentController.store);
router.put('/appointment/:id', appointmentController.update);
router.delete('/appointment/:id', appointmentController.delete);

//users
router.post('/user', userController.store);
router.put('user/:id', userController.update);
router.delete('user/:id', userController.delete);
export default router;
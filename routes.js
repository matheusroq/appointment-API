import { Router } from 'express';

const router = new Router();

import appointmentController from './src/controllers/AppointmentController';
import userController from './src/controllers/UserController';
import tokenController from './src/controllers/TokenController';
import loginRequired from './src/middlewares/loginRequired';

//appointments
router.get('/appointments', loginRequired, appointmentController.index);
router.get('/appointment/:id',loginRequired, appointmentController.show);
router.post('/appointment',loginRequired, appointmentController.store);
router.put('/appointment/:id',loginRequired, appointmentController.update);
router.delete('/appointment/:id',loginRequired, appointmentController.delete);

//users
router.post('/user', userController.store);
router.put('/user/:id',loginRequired, userController.update);
router.delete('/user/:id',loginRequired, userController.delete);

//token
router.post('/token', tokenController.createToken);


export default router;
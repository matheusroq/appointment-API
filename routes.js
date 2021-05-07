import { Router } from 'express';

const router = new Router();

import appointmentController from './src/controllers/AppointmentController';
import userController from './src/controllers/UserController';
import tokenController from './src/controllers/TokenController';
import loginRequired from './src/middlewares/loginRequired';

//appointments
router.get('/appointments', loginRequired, appointmentController.index);
router.get('/appointment/:id',authentication, appointmentController.show);
router.post('/appointment',authentication, appointmentController.store);
router.put('/appointment/:id',authentication, appointmentController.update);
router.delete('/appointment/:id',authentication, appointmentController.delete);

//users
router.post('/user', userController.store);
router.put('/user/:id',authentication, userController.update);
router.delete('/user/:id',authentication, userController.delete);

//token
router.post('/token', tokenController.createToken);


export default router;
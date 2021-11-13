import Appointment from '../models/Appointment';
import User from '../models/User';

const models = [Appointment, User];

const connection = models.forEach(async model => await model.sync({ alter: true }));

export default connection;

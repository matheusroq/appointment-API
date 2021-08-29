import Sequelize from 'sequelize';
import database from '../config/database';
import Appointment from '../models/Appointment';
import User from '../models/User';

const models = [Appointment, User];

const connection = new Sequelize(database);

models.forEach(model => model.init(connection));
models.forEach(async model => await model.sync({alter : true}));

export default connection;

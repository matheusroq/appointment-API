import Sequelize from 'sequelize';
import connection from '../database/index';

const Appointment = connection.define('appointment', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hour: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Appointment.sync({ force: false}).then(() => {});

export default Appointment;

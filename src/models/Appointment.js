import Sequelize, { Model } from 'sequelize';


export default class Appointment extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            appointment: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            sequelize
        })
        return this
    }
}




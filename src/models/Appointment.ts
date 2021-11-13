import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';

interface AppointmentAttributes {
    id: number;
    name: string;
    appointment: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface AppointmentInput extends Optional<AppointmentAttributes, 'id'> { }
export interface AppointmentOutput extends Required<AppointmentAttributes> { }

export default class Appointment extends Model<AppointmentAttributes, AppointmentInput>{
    public id!: number;
    public name!: string;
    public appointment!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Appointment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    appointment: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})


import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }
export default class User extends Model<UserAttributes, UserInput> {
    public id!: number;
    public name!: number;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'e-mail',
            msg: 'The e-mail already exists.'
        },
        validate: {
            isEmail: {
                msg: 'Invalid e-mail.'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [6, 50],
                msg: 'The password length must be between 6 and 50 characters'
            }
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'users'
});


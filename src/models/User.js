import Sequelize from 'sequelize';
import connection from '../database/index';
import bcrypt from 'bcryptjs';

const User = connection.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: 'The e-mail already exists.'
        },
        validate: {
            isEmail: {
                msg: 'Invalid e-mail.'
            }
        }
    },
    password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
            leng: {
                args: [6, 50],
                msg: 'The password length must be between 3 and 50 characters'
            }
        }
    }
},
    {
        hooks: {
            beforeSave() {
                async (user) => {
                    if (user.password) {
                        user.password_hash = await bcrypt.hash(user.password, 8)
                    }
                }
            }
        }
    }
);
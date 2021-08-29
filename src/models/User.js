import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


export default class User extends Model {
    static init(sequelize) {
        super.init( {
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
            password: {
                type: Sequelize.STRING,
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'The password length must be between 6 and 50 characters'
                    }
                } 
            }
        }, {
            sequelize
        })
        return this
    }
    
}

export const passwordIsValid = async (password, user)  => {
    try{
        const comparePassword = await bcrypt.compare(password, user.password);
        return comparePassword;
    } catch(e) {
        console.log(e)
    }
    
  }


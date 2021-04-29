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
    password: {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [6, 50],
                msg: 'The password length must be between 6 and 50 characters'
            }
        } 
    }
}
);


async function createTable() {
    try {
      await User.sync({ force: false })
    } catch (error) {
        console.log(error)
    }
}

createTable();

const passwordIsValid = async (password, user)  => {
    try{
        const comparePassword = await bcrypt.compare(password, user.password);
        return comparePassword;
    } catch(e) {
        console.log(e)
    }
  }

export default User;

export { passwordIsValid }
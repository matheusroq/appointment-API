import jwt from 'jsonwebtoken';
import User, { passwordIsValid } from '../models/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

class Token {
    async createToken(req, res) {
        try {
                const { email, password } = req.body;

                if(!email || !password) {
                    return res.status(400).json({
                        errors: ['Invalid credencials']
                    })
                } 

        

            const user = await User.findOne({ where: { email }});

            if(!user) {
                return res.status(400).json({
                    errors: ['User doesn\'t exists.']
                })
            }    

             if(!( await passwordIsValid(password, user))) {
                return res.status(400).json({
                    errors: ['Invalid password']
                })
            }   

            const { id } = user;
            
            const token = await jwt.sign({ id, email }, process.env.SECRET, { expiresIn: process.env.EXPIRES });
            
            return res.json({ token })
        } catch (error) {
            res.status(400).json(error);
        }
        
    }
}

export default new Token();

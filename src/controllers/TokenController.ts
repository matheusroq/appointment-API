import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs'
import User from '../models/User';


class TokenController {
    async createToken(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    errors: ['Invalid credencials']
                })
            }



            const user = await User.findOne({ where: { email } }) as User;

            if (!user) {
                return res.status(400).json({
                    errors: ['User doesn\'t exists.']
                })
            }

            if (!(await this.passwordIsValid(password, user))) {
                return res.status(400).json({
                    errors: ['Invalid password']
                })
            }

            const { id } = user;
            const secret = process.env.SECRET as string;
            const token = await jwt.sign({ id, email }, secret, { expiresIn: process.env.EXPIRES });

            return res.json({ token })
        } catch (error) {
            res.status(400).json(error);
        }

    }
    passwordIsValid = async (password: string, user: User) => {
        try {
            const comparePassword = await compare(password, user.password);
            return comparePassword;
        } catch (e) {
            console.log(e)
        }

    }
}

export default new TokenController();

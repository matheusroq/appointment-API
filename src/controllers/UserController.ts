import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';


class UserController {
    async store(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const salt = bcrypt.genSaltSync();
            const password_hash = bcrypt.hashSync(password, salt)

            const user = await User.create({ name, email, password: password_hash });
            return res.json(user);
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    error: ['Missing ID']
                });
            }

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    error: ['User doesn\' exists.']
                });
            }

            const newUser = await user.update(req.body);
            const { name, email } = newUser;
            return res.json({ name, email });
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    error: ['Missing ID']
                });
            }

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    error: ['User doesn\' exists.']
                });
            }

            await user.destroy();
            return res.json({ msg: 'User was destroy' });
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }

}


export default new UserController();
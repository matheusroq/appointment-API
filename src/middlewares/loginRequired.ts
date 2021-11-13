import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

interface UserVerify {
    id: number;
    email: string;
}
export default async function (req: Request, res: Response, next: NextFunction) {

    const auth = req.headers.authorization
    if (!auth) {
        return res.status(401).json({
            errors: ['Login required']
        });
    }
    try {
        const [, token] = auth.split(' ');
        const secret = process.env.SECRET as string;
        const data = jwt.verify(token, secret) as UserVerify;
        const { id, email } = data;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({
                errors: ['User doesn\'t exists.']
            });
        }

        req.loggedUser = { id, email };

        return next();
    } catch (error) {
        return res.status(401).json({
            errors: ['Invalid or expired token']
        });
    }
}
import User from '../models/User';


class UserController {
    async store(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (error) {
            return res.status(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                return res.status(400).json({
                    error: ['Missing ID']
                });
            }

            const user = await User.findByPk(id);
            if(!user) {
                return res.status(404).json({
                    error: ['User doesn\' exists.']
                });
            }

            const newUser = await user.update(req.body);
            const  { name, email } = newUser;
            return res.json({ name, email });
        } catch (error) {
            return res.status(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                return res.status(400).json({
                    error: ['Missing ID']
                });
            }

            const user = await User.findByPk(id);
            if(!user) {
                return res.status(404).json({
                    error: ['User doesn\' exists.']
                });
            }

            await user.destroy();
            return res.json({ msg: 'User was destroy' });
        } catch (error) {
            return res.status(error);
        }
    }

}


export default new UserController();
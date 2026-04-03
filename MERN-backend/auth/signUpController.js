import UserModel from '../model/userModel.js'
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const SignUpController = async (req, res, next) => {
    try {
        console.log("Signup request body", req.body)
        let { email, password,rePassword, username } = req.body;
        if (password !== rePassword) {
            return res.status(400).send({ message: 'Passwords do not match!' });
        }

        let encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        await UserModel.create({ email: email, password: encryptedPassword, username: username })

        res.status(200).send({ message: 'User created successfully!' })
    } catch (err) {
        console.log("Error on creatin user", err)
        res.status(500).send("Error on creating user!")
    }
}

export default SignUpController;
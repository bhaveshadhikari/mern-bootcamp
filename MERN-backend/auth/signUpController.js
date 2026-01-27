import UserModel from '../model/user.js'

const SignUpController = async (req, res, next) => {
    try {
        let { email, password, username } = req.body;
        await new UserModel.create({ email, password, username })

        res.status(200).send({ message: 'User created successfully!' })
    } catch (err) {
        console.log("Error on creatin user", err)
        res.status(500).send("Error on creating user!")
    }
}

export default SignUpController;
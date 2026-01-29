import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';


const LoginController = async (req, res, next) => {
    console.log("login route", req.body)
    let { email, password } = req.body
    if (!email || !password)
        res.status(400).send("Email or Password is missing")
    else {

        try {
            // some logic to check if the email and password is correct.
            let user = await userModel.findOne({ email: email })
            // if no user exists for that email
            if (!user) return res.status(400).send("User not found")

            let isPasswordMatch = await bcrypt.compare(password, user.password)
            if (!isPasswordMatch) return res.status(400).send("Invalid password")

            let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY)
            user.token = token;

            console.log("token", token)
            await user.save();
            res.status(200).send({ token: token, message: "Login succesfully" })
        } catch (err) {
            res.status(500).send("Something went wrong!")
        }
    }

}

export default LoginController
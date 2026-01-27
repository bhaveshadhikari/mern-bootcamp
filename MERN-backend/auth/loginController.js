import jwt from 'jsonwebtoken';

const SECRET_KEY = "MYSOMERANDOMSECRETKEYSTRING";

const LoginController = (req, res, next) => {
    console.log("login route", req.body)
    let { email, password } = req.body
    if (!email || !password)
        res.status(400).send("Email or Password is missing")
    else {
        // some logic to check if the email and password is correct.

        let token = jwt.sign({ email, password }, SECRET_KEY)
        res.status(200).send({ token: token, message: "Login succesfully" })
    }

}

export default LoginController
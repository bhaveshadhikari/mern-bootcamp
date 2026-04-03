import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const SECRETKEY = "HDGFJYVBY3ER7YTIUYVBETIUVBUYRI";

const loginController = async (req, res) => {
  console.log("login route:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  try {
    // find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("User not found");
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }

    // generate token
    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      SECRETKEY
    );

    res.status(200).json({
      message: "Login success",
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
};

export default loginController;

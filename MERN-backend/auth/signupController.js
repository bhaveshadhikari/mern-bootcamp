import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const SECRETKEY = "HDGFJYVBY3ER7YTIUYVBETIUVBUYRI";
const SALT_ROUNDS = 10;

const signupController = async (req, res) => {

  console.log("signup route:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Name, email and password are required");
  }

  try {
    // check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).send("Email already in use");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // save to database
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, name: newUser.name, email: newUser.email }, SECRETKEY);

    res.status(201).json({
      message: "User created successfully",
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
};

export default signupController;

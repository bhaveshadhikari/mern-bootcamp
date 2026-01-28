import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const SECRETKEY = "HDGFJYVBY3ER7YTIUYVBETIUVBUYRI";
const SALT_ROUNDS = 10;

const signInController = async (req, res) => {
  console.log("signin route:", req.body);

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Cant be empty!!");
  }

  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // save to database
    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, username }, SECRETKEY);

    res.status(201).json({
      message: "User created successfully",
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
};

export default signInController;

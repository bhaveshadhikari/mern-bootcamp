import jwt from "jsonwebtoken";
import User from "../models/User.js";

const SECRETKEY = "HDGFJYVBY3ER7YTIUYVBETIUVBUYRI";

const loginController = async (req, res) => {
  console.log("login route:", req.body);

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Cant be empty!!");
  }

  try {
    // yeha chai database maa save garney
    const newUser = new User({ username, password });
    await newUser.save();

    const token = jwt.sign({ username }, SECRETKEY);

    res.status(201).json({
      message: "Saved to DB & Auth success!!",
      token
    });
  } catch (err) {
    res.status(500).send("Database error");
  }
};

export default loginController;

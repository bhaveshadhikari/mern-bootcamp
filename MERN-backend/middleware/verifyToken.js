import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization|| '';

  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access!" });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Token verification failed" });
  }
};

export default verifyToken;

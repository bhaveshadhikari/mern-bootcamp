import { Router } from 'express';
import handleAuth from './auth/auth.js'
import LoginController from './auth/loginController.js'
import SignUpController from './auth/signUpController.js'
import verifyToken from './middleware/verifyToken.js'
import DashboardController from './controller/DashboardController.js'
import UpdateAnalyticsController from './controller/UpdateAnalyticsController.js'

const router = Router();
const privateRouter = Router();

// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', LoginController)
router.post("/auth/signup", SignUpController)

// private routes
privateRouter.get("/", (req, res) => {
  res.status(200).send({ message: "Private route accessed", user: req.user })
})

privateRouter.get("/dashboard", DashboardController)
privateRouter.post("/analytics/update", UpdateAnalyticsController)

router.use("/private", verifyToken, privateRouter)

export default router;

import { Router } from 'express';
import handleAuth from './auth/auth.js'
import LoginController from './auth/loginController.js'
import SignUpController from './auth/signUpController.js'

const router = Router();

// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', LoginController)
router.post("/auth/signup", SignUpController)

export default router;

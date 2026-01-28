import { Router } from 'express';
import handleAuth from './auth/auth.js'
import loginController from './auth/loginController.js';
import signInController from './auth/signInController.js';
const router = Router();


// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', loginController)
router.post('/auth/signin', signInController)

export default router;

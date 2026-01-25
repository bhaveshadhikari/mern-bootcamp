import { Router } from 'express';
import handleAuth from './auth/auth.js'
const router = Router();


// auth related routes
router.get('/auth/', handleAuth)
router.post('/auth/login', handleAuth)

export default router;

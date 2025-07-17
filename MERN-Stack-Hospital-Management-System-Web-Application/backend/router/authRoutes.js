import express from 'express';
const router = express.Router();
import { registerUser } from '../controller/authController.js';

router.post('/register', registerUser);

export default router;

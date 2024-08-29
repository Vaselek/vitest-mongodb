import { Router } from 'express';
import { registerUser } from '../controllers/userController';

const authRoutes = Router();

authRoutes.post('/register', registerUser);

export default authRoutes;
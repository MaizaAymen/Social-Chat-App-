import express from 'express';
import { isAuthenticated, login, logout, register, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router(); // Correction du nom du routeur
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/sendVerifyOtp',userAuth,sendVerifyOtp);
authRouter.post('/verifyEmail',userAuth,verifyEmail);
authRouter.post('/isAuthenticated',userAuth,isAuthenticated);


export default authRouter; // N'oubliez pas d'exporter le routeur

import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router(); // Correction du nom du routeur
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/sendVerifyOtp',userAuth,sendVerifyOtp);
authRouter.post('/verifyEmail',userAuth,verifyEmail);
authRouter.get('/isAuthenticated',userAuth,isAuthenticated);
authRouter.post('/sendResetOtp',sendResetOtp);
authRouter.post('/resetPassword',resetPassword);

export default authRouter; // N'oubliez pas d'exporter le routeur
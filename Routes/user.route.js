import express from 'express';
import { login, logOut, register } from '../Controllers/user.controllers.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logOut);
export default router
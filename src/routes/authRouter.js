import {Router } from "express";
import {Login, Cadastro} from '../controllers/authController.js';
import { validateCadastro } from '../middlewares/validateCadastro.js';
import { validateLogin } from "../middlewares/validateLogin.js";



const router = Router();

router.post("/",validateLogin, Login);

router.post("/cadastro",validateCadastro, Cadastro);

export default router;
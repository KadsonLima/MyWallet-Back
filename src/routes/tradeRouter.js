import {Router } from "express";
import {Home, Trade} from '../controllers/tradeController.js';
import { validarTrade } from '../middlewares/validarTrade.js';
import { validarToken } from '../middlewares/validarToken.js';



const router = Router();

router.post("/trade",validarToken, validarTrade, Trade);

router.get("/home",validarToken, Home);

export default router;
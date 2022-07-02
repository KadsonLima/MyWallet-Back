import {Router } from "express";
import {Home, Trade} from '../controllers/tradeController.js';
import { validarTrade } from '../middlewares/validarTrade.js';



const router = Router();

router.post("/trade",validarTrade, Trade);

router.get("/home", Home);

export default router;
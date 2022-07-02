import { db } from "../dbWallet/mongo.js";
import { trade } from "../schemas/trade.js";


export async function validarTrade(req, res, next){
    const validate = trade.validate(req.body);

    if(validate.error){
        res.status(403).send(validate.error);
        return;
    }
    
    const user = req.body;

    res.locals.user = user;
    next();
}
import { db } from "../dbWallet/mongo.js";
import { trade } from "../schemas/trade.js";


export async function validarTrade(req, res, next){
    
    const validate = trade.validate(req.body);

    if(validate.error){
        res.status(403).send(validate.error);
        return;
    }
    const verifyBdUser = await db.collection("trade").findOne({'_id': req.headers.id })
    if(!verifyBdUser){
        await db.collection("trade").insertOne({'_id': req.headers.id })
    }

    next();
}
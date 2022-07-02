import { db } from "../dbWallet/mongo.js";
import { cadastro } from "../schemas/joi.js";


export async function validateCadastro(req, res, next){
    const validate = cadastro.validate(req.body);

    const email = await db.collection("users").find({email:req.body.email});
    
    if(email.email){
        console.log(email)
        return res.sendStatus(409);
    }

    if(validate.error){
        res.status(403).send(validate.error);
        return;
    }
    
    const user = req.body;

    res.locals.user = user;
    console.log("Next")
    next();
}
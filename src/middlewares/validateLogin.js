import { db , objectid} from "../dbWallet/mongo.js";
import { login } from "../schemas/login.js";
import bcrypt from 'bcrypt';


export async function validateLogin(req, res, next){
    const {email, password} = req.body;
    const validate = login.validate(req.body);

    if(validate.error){
        res.status(403).send(validate.error);
        return;
    }
    
    const verificarEmail = await db.collection("users").findOne({email})
    const compararPassword = verificarEmail&&bcrypt.compareSync(password, verificarEmail.password);

    if(!verificarEmail || !compararPassword){
        return res.sendStatus(404);
    }

    const {_id, name} = verificarEmail;

    res.locals.user = {_id, name};
    next();
}
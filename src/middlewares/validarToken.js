import { db } from "../dbWallet/mongo.js";


export async function validarToken(req, res, next){
    const {token, _id} = req.headers

    console.log("Token e id", token, _id);
    

    //res.locals.user = user;
    next();
}
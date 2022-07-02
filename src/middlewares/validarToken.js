import { db , objectid} from "../dbWallet/mongo.js";


export async function validarToken(req, res, next){
    const {authorization, id} = req.headers
    if(!authorization || !id) return res.sendStatus(401)
    const token = authorization.replace("Bearer ", '');
    
    const verifyUser = await db.collection("session").findOne(objectid(id));

    if(verifyUser.token !== token){
        return res.sendStatus(401);
    }

    //res.locals.user = user;
    next();
}
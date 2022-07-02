import dayjs from "dayjs";
import { db } from '../dbWallet/mongo.js';


export async function Home(req, res){
    const {id} = req.headers;
    
    const getBdUser = await db.collection("trade").find({'_id':id}).toArray();
    console.log(getBdUser)
    res.send("OK").status(200);
}

export async function Trade(req, res){
    const {authorization, id} = req.headers;

    console.log("id", id)
    
    const bancoUser = await db.collection("trade").updateOne({'_id': id }, {$push:{'trade':req.body}})

    res.send(req.headers).status(200);
}


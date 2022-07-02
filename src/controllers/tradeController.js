import dayjs from "dayjs";
import { db } from '../dbWallet/mongo.js';


export async function Home(req, res){

    //const verificarEmail = await db.collection("trade").findOne({email})
   
    res.send("OK").status(200);
}

export async function Trade(req, res){
    const { tipo, valor, descricao } = req.body;
  
    res.send("OK").status(200);
}


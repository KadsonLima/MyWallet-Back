import dayjs from "dayjs";
import { db } from '../dbWallet/mongo.js';


export async function Home(req, res){
    const {id} = req.headers;
    
    const getBdUser = await db.collection("trade").find({'_id':id}).toArray();

    let saldo = 0;
    getBdUser[0].trade.forEach(e =>{
        if(e.tipo === 0){
            saldo += parseFloat(e.valor)
        }else{
            saldo -= parseFloat(e.valor)

        }
    })
    console.log(saldo)
    res.send({getBdUser, saldo}).status(200);
}

export async function Trade(req, res){
    const {authorization, id} = req.headers;
    const {tipo, valor, descricao} = req.body;

    const operacao = {tipo, valor , descricao, 'dia':dayjs().format("DD/MM")}
    
    const bancoUser = await db.collection("trade").updateOne({'_id': id }, {$push:{'trade':operacao}})

    res.send(req.headers).status(200);
}


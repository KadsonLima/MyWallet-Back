import { db } from '../dbWallet/mongo.js';
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';


export async function Login(req, res){
    const {name, _id} = res.locals.user;

    console.log("NAME E ID", name, _id);
    const token = uuid();

    await db.collection("session").deleteOne({_id});
    await db.collection("session").insertOne({name, _id, token});

    res.status(200).send({token, _id, name});
}

export async function Cadastro(req, res){
    const {name, email, password} = res.locals.user;

    const passwordCrypt = bcrypt.hashSync(password, 10);

    await db.collection("users").insertOne({name, email, password:passwordCrypt});

    res.send("OK");
}
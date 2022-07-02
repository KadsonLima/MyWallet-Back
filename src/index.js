import express from "express";
import cors from "cors";
import authRouter from './routes/authRouter.js';
import tradeRouter from "./routes/tradeRouter.js";
import dotenv from 'dotenv';

const server = express();
server.use(cors(), express.json());

server.use(authRouter);
server.use(tradeRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("RODANDO SERVER!!");
});

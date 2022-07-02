import express from "express";
import cors from "cors";
import authRouter from './routes/authRouter.js';
import tradeRouter from "./routes/tradeRouter.js";

const server = express();
server.use(cors(), express.json());

server.use(authRouter);
server.use(tradeRouter);


server.listen(5000, () => {
  console.log("RODANDO SERVER!!");
});

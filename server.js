import express from 'express';
import routerAi from './routers/chat.router.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/ai",routerAi)

app.listen(process.env.PORT ,()=>{
    console.log('Server is runnging at port ',process.env.PORT )
})

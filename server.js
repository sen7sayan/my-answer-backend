import express from 'express';
import routerAi from './routers/chat.router.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/ai",routerAi)

app.listen(process.env.PORT ,()=>{
    console.log('Server is running at port ',process.env.PORT )
})

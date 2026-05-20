import express from 'express';
import { chatWithAI } from '../controller/myanswer.controller.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1, 
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});



router.post('/chat',limiter,chatWithAI )

export default router;
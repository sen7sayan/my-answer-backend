import express from 'express';
import { chatWithAI } from '../controller/myanswer.controller.js';

const router = express.Router();
router.post('/chat',chatWithAI )

export default router;
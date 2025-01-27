import express from 'express';
import { test } from '../controllars/user.controller.js';


const router = express.Router();

router.get('/test', test)

export default router;
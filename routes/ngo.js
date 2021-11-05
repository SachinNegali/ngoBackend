import express from 'express'
import { getNgos } from '../controllers/ngo.js'
const router = express.Router();

router.get('/', getNgos)

export default router;
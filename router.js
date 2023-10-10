import { Router } from "express";
import index from './routes/index.js'
import pet from './routes/pet.js'
import aluno from './routes/aluno.js'
import user from './routes/user.js'
const router = Router();

router.use(index)
router.use('/pet',pet)
router.use('/aluno',aluno)
router.use('/user',user)
export default router
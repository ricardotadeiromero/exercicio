import { Router } from "express";
import { checkAluno } from "../controller/aluno.js";

const router = Router();

router.get('/check/:ra/:senha',async (req,res)=>{
    const {ra,senha} = req.params;
    res.send(await checkAluno(ra,senha));
})

export default router
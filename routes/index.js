import { Router } from "express";


const router = Router();

router.get('/',(_,res)=>{
    res.send('Ta funcionando');
})

export default router
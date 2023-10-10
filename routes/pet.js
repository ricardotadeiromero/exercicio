import { Router } from "express";
import fs from 'fs/promises'
const router = Router()

router.get('/',async (_,res)=>{
    const data = await fs.readFile('./data/pets.json');
    const pets = JSON.parse(data.toString())
    res.send(pets);
});

export default router
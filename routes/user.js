import { Router } from "express";
import { createUser, login } from "../controller/login.js";

const router = Router()

router.post('/create',async(req,res)=>{
    const body = req.body
    console.log(body);
    await createUser(body)

    res.status(201).send('Usuário criado!');
})

router.post('/login', async(req,res)=>{
    const body = req.body;
    const response = await login(body);

    res.cookie("token", response, {
        httpOnly: true,
        path: "/",
        sameSite:  true,
        secure: true,
        maxAge: 5 * 1000 * 60
    })

    res.send(response)
})

export default router
import connection from "../database.js";
import bcrypt from 'bcryptjs';
import ApiError from '../model/api_error.js'
import jwt from "jsonwebtoken";
import { jwtSecret } from "../enviroment.js";

export async function createUser({user,password}) {
    try {
        const hash = await bcrypt.hash(password, 10)
        await connection.execute('INSERT INTO user (username,password) VALUES (?,?)',[user,hash])
    } catch(e) {
        console.error(e)
        throw new ApiError("Não foi possível criar o usuário",500);
    }
}

export async function login({user,password}) {
    const [[response]] = await connection.execute('SELECT password FROM user WHERE username = ?', [user]);

    if (!response) {
        throw new ApiError("Usuário não encontrado!",404);
    }

    const hash = response.password;

    if (!await bcrypt.compare(password,hash)){
        throw new ApiError("Senha incorreta",401);
    }

    const token = jwt.sign({
        username: user
    }, jwtSecret, {
        expiresIn: "2h"
    });

    return token
}

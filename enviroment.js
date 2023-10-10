import dotenv from 'dotenv';

dotenv.config()

export const jwtSecret = process.env.SECRET
export const port = process.env.PORT || 3000
export const dbOptions = {
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
}
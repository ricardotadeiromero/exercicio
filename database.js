import mysql from 'mysql2/promise';
import { dbOptions } from './enviroment.js';

const connection = await mysql.createConnection(dbOptions)

export default connection
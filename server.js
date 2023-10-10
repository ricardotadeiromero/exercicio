import Express from 'express'
import router from './router.js'
import { port } from './enviroment.js';
import "express-async-errors";
import bodyParser from 'body-parser';
import ApiError from './model/api_error.js';

const app = Express();

app.use(bodyParser.json());
app.use(router)

app.use((err,req,res,next)=>{
    console.error(err)

    if(err instanceof ApiError){
        return res.status(err.status).send(err.message);
    } else {
        return res.status(500).send('Internal server error!');
    }
})

app.listen(port)

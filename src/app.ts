import 'dotenv/config';
import express from 'express';

import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger.json';
import {swaggerOptions} from "../swaggerOptions"
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.SERV_PORT, function () {
    console.log('Server is running on', process.env.SERV_PORT);
});

import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import swaggerDocument from '../swagger.json';

const app = express();

app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.SERV_PORT, function () {
    console.log('Server is running on', process.env.SERV_PORT);
});

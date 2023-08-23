import express from 'express';
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running!`)
})
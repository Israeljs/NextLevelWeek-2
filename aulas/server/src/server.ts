import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
// Configurar o express para ler formato JSON
app.use(express.json());
app.use(routes);


// localhost:3333/users

app.listen(3333);

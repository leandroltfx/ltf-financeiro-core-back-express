import express from 'express';

import routes from './routes/routes.js';
import connectionDB from './config/db-connect.js';

connectionDB.on('error', console.log.bind(console, 'Erro de conexão'));
connectionDB.once('open', () => {
  console.log('conexão com o banco feita com sucesso')
});

const app = express();

routes(app);

export default app;

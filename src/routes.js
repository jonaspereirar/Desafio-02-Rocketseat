import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send({ Menssagem: 'Olá Pessoal' }));
export default routes;

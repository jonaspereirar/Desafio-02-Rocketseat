import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ Menssagem: 'Olá galera' });
});

export default routes;

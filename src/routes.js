import { Router } from 'express';

const routes = new Router();

<<<<<<< HEAD
routes.get('/', (req, res) => res.send({ Menssagem: 'Olá Pessoal' }));
=======
routes.get('/', (req, res) => {
    return res.json({ Menssagem: 'Olá galera' });
});

>>>>>>> featrc
export default routes;

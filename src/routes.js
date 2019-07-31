import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rota de criação de usuario
routes.post('/users', UserController.store);
// Rota de autênticação de usuário
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // User Authentication Middleware Logged In.

// after logged in user can update
routes.put('/users', UserController.update);

export default routes;

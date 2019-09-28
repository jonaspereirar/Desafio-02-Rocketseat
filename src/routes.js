import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import FileController from './app/controllers/FileController';

const routes = new Router();

const upload = multer(multerConfig);

// Rota de criação de usuario
routes.post('/users', UserController.store);
// Rota de autênticação de usuário
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // User Authentication Middleware Logged In.

// after logged in user can update
routes.put('/users', UserController.update);

// update file
routes.post('/files', upload.single('file'), FileController.store);

export default routes;

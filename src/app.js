import express from 'express';
<<<<<<< HEAD

import routes from './routes';

this.middewares();
this.routes();

class App {
  constructor() {
    this.server = express();
  }

  middewares() {
    this.server.use(express.json);
=======
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middeware();
    this.routes();
  }

  middeware() {
    this.server.use(express.json());
>>>>>>> server
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;

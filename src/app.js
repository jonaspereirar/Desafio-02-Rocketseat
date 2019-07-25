import express from 'express';

import routes from './routes';

this.middewares();
this.routes();

class App {
  constructor() {
    this.server = express();
  }

  middewares() {
    this.server.use(express.json);
  }

  routes() {
    this.server.use(routes);
  }
}
export default new app().server;

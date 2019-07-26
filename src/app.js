import express from 'express';

import routes from './routes';

this.middewares();
this.routes();

  }

  middewares() {
    this.server.use(express.json());
>>>>>>> server
  }

  routes() {
    this.server.use(routes);
  };
}
export default new App().server;
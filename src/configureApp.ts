import express, { Express } from 'express';

import configureRouter from './configureRouter';

export default () => {
  const app: Express = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  configureRouter(app);

  return app;
};

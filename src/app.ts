import mongoose from 'mongoose';
import configureApp from './configureApp';
import { Express } from 'express';

const MONGO_URI = 'mongodb://admin:password@localhost:27017';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connection OK');

    const app: Express = configureApp();

    app.listen(3000, () => {
      console.log('Server listening at 3000');
    });

  })
  .catch((err: Error) => {
    console.error('MongoDB Connection Error:', err.message);
  });
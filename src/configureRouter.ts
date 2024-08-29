import { Express } from 'express';
import { Router } from 'express';
import authRoutes from './routes/authRoutes';


const router: Router = Router();

router.use('/auth', authRoutes);

export default function(app: Express): void {
  app.use('/api', router);
  console.log('Router configured');
}
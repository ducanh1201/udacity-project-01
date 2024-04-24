import express, { Request, Response } from 'express';
import images from './api/images';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Connected api router!');
});

router.use('/images', images);

export default router;

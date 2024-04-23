import express from 'express';
import images from './api/images';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Connected api router!');
});

router.use('/images', images);

export default router;
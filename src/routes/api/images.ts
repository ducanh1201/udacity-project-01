import express from 'express';
import { resizeImage } from '../../utils/images-utils';

const images = express.Router();


images.get('/', async (req, res) => {
    const { filename, width, height } = req.query;
    const rootPath = `assets/images/${filename}.jpg`;
    const cachePath = `assets/cache/${filename}-${width}x${height}.jpg`;
    
    const resizedImage = await resizeImage(rootPath, cachePath, Number(width), Number(height));

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(resizedImage);
});

export default images;
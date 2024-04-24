import express, { Request, Response } from 'express';
import { resizeImage } from '../../utils/images-utils';
import { existsSync } from 'fs';

const images = express.Router();

images.get('/', async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  if (filename === undefined || width === undefined || height === undefined) {
    res.status(400).send('Missing required parameters');
  } else if (isNaN(Number(width)) || isNaN(Number(height))) {
    res.status(400).send('Width and height should be numbers');
  } else if (Number(width) <= 0 || Number(height) <= 0) {
    res.status(400).send('Width and height should be greater than 0');
  } else if (!existsSync(`assets/images/${filename}.jpg`)) {
    res.status(404).send('Image not found');
  } else {

    const rootPath = `assets/images/${filename}.jpg`;
    const cachePath = `assets/cache/${filename}-${width}x${height}.jpg`;

    const resizedImage = await resizeImage(
      rootPath,
      cachePath,
      Number(width),
      Number(height),
    );

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(resizedImage);
  }
});

export default images;

import { existsSync, promises as fsPromises } from 'fs';
import sharp from 'sharp';

export async function resizeImage(
  rootPath: string,
  cachePath: string,
  width: number,
  height: number,
): Promise<Buffer> {
  if (existsSync(cachePath)) {
    const resizedImage = await fsPromises.readFile(cachePath);
    return resizedImage;
  }

  const resizedImage = await sharp(rootPath)
    .resize(Number(width), Number(height))
    .toBuffer();

  await createCache(cachePath, resizedImage);

  return resizedImage;
}

export async function createCache(
  cachePath: string,
  resizedImage: Buffer,
): Promise<void> {
  await fsPromises.writeFile(cachePath, resizedImage);
}





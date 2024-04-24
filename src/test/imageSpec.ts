import supertest from 'supertest';
import { resizeImage } from '../utils/images-utils';
import app from '../index';

describe('resizeImage', () => {
  it('should resize the image', async () => {
    const rootPath = 'assets/images/fjord.jpg';
    const cachePath = 'assets/cache/encenadaport-400x200.jpg';
    const width = 200;
    const height = 200;

    const resizedImage = await resizeImage(rootPath, cachePath, width, height);
    expect(resizedImage).toBeDefined();
  });
});

const request = supertest(app);

describe('GET /api/images', () => {
  it('responds with an image', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200&height=200',
    );
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('image/jpeg');
    expect(response.body).toBeDefined();
  });
});

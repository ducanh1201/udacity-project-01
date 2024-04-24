import express from 'express';
import router from './routes';

const app: express.Application = express();
const port: number = 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

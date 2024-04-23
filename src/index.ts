import express, { NextFunction, Request, Response } from 'express';
import router from './routes';


const app = express();
const port = 3000;

// const logger = (req: Request, res: Response, next: NextFunction) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
// }

app.use('/api', router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;


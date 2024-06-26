import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { apiNotFound } from './utils/API-not-found';
import { routes } from './app/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(`<p>{App_NAME} server running on PORT ${config.port}</p>
  <a href="${config.frontend_url}">visit frontend</a>
  `);
});

app.use('/api/v1', routes);

// middleware
// app.use(globalErrorhandler);

app.use(apiNotFound);

export default app;

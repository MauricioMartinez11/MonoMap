import express, { Request, Response } from 'express';
import { envs } from './config/envs';
import { MongoDBDataBase } from './data/init';
import { CasesModel } from './data/models/case.model';
import { AppRoutes } from './presentation/routes';
import { emailJob } from './jobs/email.job';

console.log(envs.PORT);

const app = express();
app.use(express.json());
app.use(AppRoutes.routes);

(async () =>
  await MongoDBDataBase.connect({
    mongoURL: envs.MONGO_URL,
    dbName: envs.MONGO_DB
  }))
  ();
app.listen(envs.PORT, () => {
  console.log('Server running on PORT 3000');
  emailJob()
});
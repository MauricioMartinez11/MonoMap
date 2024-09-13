import express, { Request, Response } from 'express';
import { envs } from './config/envs';
import { MongoDBDataBase } from './data/init';
import { IncidentModel } from './data/models/incident.model';
import { AppRoutes } from './presentation/routes';
// import { EmailJob } from './domain/jobs/email.job';

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
  // EmailJob()
});
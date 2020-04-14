import { Router } from 'express';
import appointmantsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmantsRouter);

export default routes;

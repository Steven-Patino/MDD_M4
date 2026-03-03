import express from 'express';
import { connectMongo } from './config/databases/mongoconfig.js';
import { connectPostgres } from './config/databases/pgconfig.js';
import { suppliersRoutes } from './routes/suppliers.routes.js';
import { businessIntelligenceRoutes } from './routes/businessintelligence.routes.js';

connectMongo()
connectPostgres()

const app = express();
app.use(express.json());

app.use('/suppliers', suppliersRoutes);
app.use('/businessintelligence', businessIntelligenceRoutes)



export default app;
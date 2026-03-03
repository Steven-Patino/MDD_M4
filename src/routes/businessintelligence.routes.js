import { Router } from "express";
import { businessIntelligenceOne, businessIntelligenceTwo } from '../controllers/businessintelligence.controller.js';


export const businessIntelligenceRoutes = Router();

businessIntelligenceRoutes.get('/', businessIntelligenceOne)
businessIntelligenceRoutes.get('/:id', businessIntelligenceTwo)
import { Router } from "express";
import { create, getOneSupplier, deleteById} from '../controllers/suppliers.controller.js';


export const suppliersRoutes = Router();


suppliersRoutes.post('/', create);
suppliersRoutes.get('/:id', getOneSupplier)
suppliersRoutes.delete('/:id', deleteById);


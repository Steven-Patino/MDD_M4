import { pool } from "../config/databases/pgconfig.js";
import { Supplier } from '../models/supplier.model.js'


export const createSupplier = async ({ supplier_name,supplier_email }) => {
    const query = `insert into steven_patino.suplier(supplier_name, supplier_email) values ($1,$2) returning id`;
    const values = [supplier_name, supplier_email];

    try {
        const response = await pool.query(query, values);
        return response.rows;
    } catch (error) {
        console.error('Error al crear el proveedor desde el service.', error);
        throw error;
    }
}

export const getSupplierById = async (id) => {
    const query = `select * from steven_patino.suplier where id=$1`;
    const search = [id];

    try {
        const response = await pool.query(query,search);
        return response.rows[0];
    } catch (error) {
        console.error('Error al obtener proveedor desde el service.', error);
        throw error;
    }
}

export const deleteSupplier = async (id) => {
    const query = 'DELETE FROM steven_patino.suplier WHERE id = $1 RETURNING id,supplier_name,supplier_email';
    const values = [id]

    try {
        const response = await pool.query(query, values);

        if (response.rowCount === 0) {
            throw new HttpError("No se elimino el proveedor", 500)
        }
        const supplierDeleted = new Supplier(response.rows[0]).save();

        return response;
    } catch (error) {
        console.error('Error al eliminar un doctor')
        throw error;
    }
}


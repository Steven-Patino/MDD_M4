import mongoose from "mongoose";

export const suppliersSchema = new mongoose.Schema(
    {
        id: String,
        supplier_nama: String,
        supplier_email: String
    }
)

export const Supplier = mongoose.model('Supplier', suppliersSchema);
import { createSupplier , deleteSupplier, getSupplierById} from "../services/suppliers.service.js";



export const create = async (req, res) => {
    const {supplier_name, supplier_email} = req.body;

    try {
        const newSupplier = await createSupplier({ supplier_name, supplier_email });

        if (!newSupplier || newSupplier.length === 0) {
            return res.status(500).json({ error: "No se pudo crear el proveedor." });
        }
        res.status(201).json({
            response: "El proveedor ha sido creado en el sistema",
            supplier: newSupplier[0]
        });

    } catch (error) {
        console.error('Error al crear el proveedor desde el controller', error);
        res.status(500).json({ error: error.message });
    }
};


export const getOneSupplier = async (req, res) => {
    try {
        const {id} = req.params
        const supplier = await getSupplierById(id);
        res.status(200).json({ response: supplier });
    } catch (error) {
        console.error('Error al obtener el proveedor desde el controller', error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSupplier = await deleteSupplier(id);

        if (!deletedSupplier.rowCount === 0) {
            return res.status(500).json({ error: "No se ha podido eliminar proveedor desde el controlador." });
        }
        res.status(200).json({response: "Proveedor eliminado correctamente"});

    } catch (error) {
        console.error('Error al eliminar el proveedor desde el contoller.', error);
        res.status(500).json({ error: error.message });
    }

}

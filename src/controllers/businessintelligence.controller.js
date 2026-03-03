import {OptionOne, OptionTwo } from "../services/businessintelligence.service.js";

export const businessIntelligenceOne = async (req, res) => {
    try {
        const bestSelling = await OptionOne();
        res.status(200).json({ response: bestSelling });
    } catch (error) {
        console.error('Error al obtener el provedor con mayor venta desde el controller.', error);
        res.status(500).json({ error: error.message });
    }
};

export const businessIntelligenceTwo = async (req, res) => {
    try {
        const {id} = req.params
        const sellsByClientID = await OptionTwo(id);
        res.status(200).json({ response: sellsByClientID });
    } catch (error) {
        console.error('Error al obtener las ventas ṕor cliente desde el controller', error);
        res.status(500).json({ error: error.message });
    }
}
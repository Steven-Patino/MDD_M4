import { pool } from "../config/databases/pgconfig.js";

export const OptionOne = async () => {
    const query = `
select s.id, 
       s.supplier_name,
       SUM(t.quantity ) AS total_unidades_vendidas
FROM steven_patino.transactions t 
INNER JOIN steven_patino.product p ON t.product_id  = p.product_sku 
INNER JOIN steven_patino.suplier s  ON s.id = p.supplier_id 
GROUP BY s.supplier_name, s.id
ORDER BY total_unidades_vendidas DESC
LIMIT 1;
`;

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener el producto más vendido desde server', error);
        throw error;
    }
}


export const OptionTwo = async (id) => {
    const query = `
    select t.*, c.customer_name 
from steven_patino.transactions t
inner join steven_patino.client c  on c.id = t.customer_id
inner join steven_patino.product p on t.product_id = p.product_sku
where c.id = $1
order by t.date asc;
    `;
    const search = [id];

    try {
        const response = await pool.query(query,search);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener las ventas por cliente.', error);
        throw error;
    }
}

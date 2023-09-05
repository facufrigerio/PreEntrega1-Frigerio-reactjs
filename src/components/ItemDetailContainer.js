import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchProductoDetail() {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/productos.json`);
                const data = await response.json();
                const selectedProducto = data.find(producto => producto.id === id);
                if (selectedProducto) {
                    setProducto(selectedProducto);
                }
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        }

        fetchProductoDetail();
    }, [id]);

    return (
        <div>
            <h2 className='my-3 text-center'>Detalle del Producto</h2>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;
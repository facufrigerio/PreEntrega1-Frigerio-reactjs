import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, query, where, getDocs } from 'firebase/firestore'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchProductoDetail() {
            try {
                const productosCollection = collection(db, 'productos');
                const q = query(productosCollection, where('id', '==', parseFloat(id)));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const productos = querySnapshot.docs[0].data();
                    setProducto(productos);
                }
            } catch (error) {
                console.error('Error al obtener el producto desde Firestore:', error);
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
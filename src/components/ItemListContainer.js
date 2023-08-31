import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const params = useParams();
    const categoryId = params.id;

    useEffect(() => {
        async function fetchProductos() {
            try {
                const response = await fetch();
                const data = await response.json();
                const filteredProductos = categoryId
                    ? data.filter(productos => productos.category === categoryId)
                    : data;
                setProductos(filteredProductos);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        }

        fetchProductos();
    }, [categoryId]);

    return (
        <div className="container">
            <div className="row">
                {productos.map(producto => (
                    <div key={producto.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">Precio: ${producto.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;


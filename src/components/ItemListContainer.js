import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const params = useParams();
    const categoryId = params.id;

    useEffect(() => {
        async function fetchProductos() {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/productos.json`);
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

    const productosRows = [];
    for (let i = 0; i < productos.length; i += 3) {
        productosRows.push(productos.slice(i, i + 3));
    }

    return (
        <div>
            {categoryId && <h2 className='text-center'>{categoryId.toUpperCase()}</h2>}
            {productosRows.map((row, index) => (
                <div key={index} className="row justify-content-center">
                    {row.map((producto) => (
                        <article key={producto.id} className="col-sm-12 col-md-8 col-lg-3 my-2">
                            <div className="card">
                                <img src={`${process.env.PUBLIC_URL}${producto.imagen}`} className="card-img-top fotoproducto" alt={`foto_${producto.nombre}`} />
                                <div className="card-body text-center">
                                    <h3 className="card-title">{producto.nombre}</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-around">
                                        <div>
                                            <p>Marca:</p>
                                        </div>
                                        <div>
                                            <p className="format">{producto.autor}</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body text-center">
                                    <button type="button" className="btn btn-info"> <Link to={`/producto/${producto.id}`} className='text-light'> Info </Link> </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;
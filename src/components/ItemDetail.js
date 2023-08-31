import { useState } from 'react';



function ItemDetail({ item }) {
    const [cantidad, setCantidad] = useState(1);



    const aumentarCantidad = () => {
        setCantidad(prevCantidad => prevCantidad + 1);
    };

    const reducirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(prevCantidad => prevCantidad - 1);
        }
    };
    return (
        <div className="card" style="width: 18rem;">
            <img src={`${process.env.PUBLIC_URL}${item.imagen}`} className="card-img-top" alt={`imagen_${item.titulo}`} />
            <div className="card-body">
                <h4 className="card-title">{item.titulo}</h4>
                <p className="card-text">{item.autor}</p>
                <p className="card-text">{item.año}</p>
                <p className="card-text">{item.precio}</p>
            </div>
            <div className="card-body text-center">
                <div className="mt-3">
                    <button onClick={reducirCantidad} className="btn btn-secondary">-</button>
                    <span className="mx-2">{cantidad}</span>
                    <button onClick={aumentarCantidad} className="btn btn-secondary">+</button>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail;

























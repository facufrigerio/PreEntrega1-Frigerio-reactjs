import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {

    return (
        <div className="card">
            <img src={`${process.env.PUBLIC_URL}${producto.imagen}`} className="card-img-top fotoproducto" alt={`imagen_${producto.titulo}`} />
            <div className="card-body">
                <h4 className="card-title">{producto.titulo}</h4>
                <p className="card-text">{producto.autor}</p>
                <p className="card-text">{producto.año}</p>
                <p className="card-text">{producto.precio}</p>
            </div>
            <div className="card-body text-center">
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail;

























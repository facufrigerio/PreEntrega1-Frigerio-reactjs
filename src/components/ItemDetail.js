import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ItemDetail({ producto }) {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addProducto } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
       console.log(quantity)
        setQuantityAdded(quantity)

        const productoWithQuantity = {
            ...producto,
            quantity: quantity
        }

        addProducto(productoWithQuantity, quantity);

    }
    return (
        <div className="card">
            <img src={`${process.env.PUBLIC_URL}${producto.imagen}`} className="card-img-top fotoproducto" alt={`imagen_${producto.titulo}`} />
            <div className="card-body">
                <h4 className="card-title">{producto.titulo}</h4>
                <p className="card-text">{producto.category}</p>
                <p className="card-text">{producto.año}</p>
                <p className="card-text">{producto.precio}</p>
            </div>
            <div className="text-center">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar reserva</Link>
                    ) : (
                        <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;

























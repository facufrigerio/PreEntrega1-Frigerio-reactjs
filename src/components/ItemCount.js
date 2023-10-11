import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)
    const aumentarQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const reducirQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
   console.log(quantity)
    return (
        <div>
            <div className="card-body text-center">
                <div className="mt-3">
                    <button onClick={reducirQuantity} className="btn btn-secondary">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={aumentarQuantity} className="btn btn-secondary">+</button>
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;

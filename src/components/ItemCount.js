import { useState } from "react";
function ItemCount() {
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
        <div>
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
export default ItemCount;

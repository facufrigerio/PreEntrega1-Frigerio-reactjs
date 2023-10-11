import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addProducto: () => { },
    removeProducto: () => { },
    clearCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addProducto = (producto, quantity) => {
        console.log('quantity en add producto')
        if (!isInCart(producto.id)) {
            console.log("Agregando producto:", producto);
            setCart((prev) => [...prev, { ...producto, quantity }]);
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
            setTotal((prevTotal) => prevTotal + quantity * producto.precio);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeProducto = (itemId) => {
        const removedProducto = cart.find((producto) => producto.id === itemId);
        if (removedProducto) {
            const newCart = cart.filter((producto) => producto.id !== itemId);
            setCart(newCart);
            setTotalQuantity((prevTotalQuantity) =>
                prevTotalQuantity - removedProducto.quantity
            );
            setTotal((prevTotal) =>
                prevTotal - removedProducto.quantity * removedProducto.precio
            );
        }
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    };

    const isInCart = (itemId) => {
        return cart.some((producto) => producto.id === itemId);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                totalQuantity,
                total,
                addProducto,
                removeProducto,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
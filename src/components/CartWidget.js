import React from 'react';

function CartWidget() {
    const itemCount = 1;

    return (
        <div className="cart-widget">
            <i className="bi bi-cart4 "></i>
            {itemCount > 0 && (
                <span className="badge bg-danger notification-badge">{itemCount}</span>
            )}
        </div>
    );
}

export default CartWidget;
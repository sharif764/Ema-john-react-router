import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h2>Total Producs {products.length}</h2>
            <h2>Cart length : {cart.length}</h2>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;
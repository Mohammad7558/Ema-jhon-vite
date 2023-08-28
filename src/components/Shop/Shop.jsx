import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedProduct => {
        let newCart = [...cart, selectedProduct];
        setCart(newCart)
        console.log(cart)
    }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className='cart'>
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className='shop-container'>
            <div>product</div>
            <div>cart</div>
        </div>
    );
};

export default Shop;
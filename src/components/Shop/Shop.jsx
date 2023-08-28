import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedProduct => {
        let newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 : get id
        for(const id in storedCart){
            // step no 2 : get product by id
            const addedProduct = products.find(product => product.id == id);
            console.log('addedProduct',addedProduct)
            //step no 3 : get quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

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
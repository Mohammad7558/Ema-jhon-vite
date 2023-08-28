import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shippingCharge = 0;
    for(const product of cart){
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping
    }
    const tax = total * 7 / 100;
    const grandtotal = total + shippingCharge + tax;

    return (
        <div className='cart'>
            <h3 className='cart-summary'>Order summary</h3>
            <h1 className='cart-details'>Selected Items: {cart.length}</h1>
            <h1 className='cart-details'>Total Price: {total}</h1>
            <h1 className='cart-details'>Total Shipping Charge: ${shippingCharge}</h1>
            <h1 className='cart-details'>Tax: ${tax}</h1>
            <h1 className='grandTotal'>Grand Total: ${grandtotal}</h1>
        </div>
    );
};

export default Cart;
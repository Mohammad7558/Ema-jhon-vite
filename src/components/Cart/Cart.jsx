import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandtotal = total + shippingCharge + tax;

    return (
        <div className='cart'>
            <h3 className='cart-summary'>Order summary</h3>
            <h1 className='cart-details'>Selected Items: {quantity}</h1>
            <h1 className='cart-details'>Total Price: {total}</h1>
            <h1 className='cart-details'>Total Shipping Charge: ${shippingCharge}</h1>
            <h1 className='cart-details'>Tax: ${tax}</h1>
            <h1 className='grandTotal'>Grand Total: ${grandtotal}</h1>
        </div>
    );
};

export default Cart;
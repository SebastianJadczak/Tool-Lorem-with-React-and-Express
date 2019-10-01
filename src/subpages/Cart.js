import React from 'react';
import CartImg from '../img/cart.png'

const Cart = (props) => {




    return (
        <>
            <img src={CartImg} alt="koszyk" className="cart" />
            <div className="amountProducts"><span>{props.amountProducts ? props.amountProducts : "0"} </span> </div>
        </>
    )
}

export default Cart;

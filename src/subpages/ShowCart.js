import React from 'react'
import '../styles/ShowCart.css'

const ShowCart = (props) => {

    return (
        <div className="showCart">
            <div className="closeShowCart" onClick={props.handleCart}><span>X</span></div>
            <div className="cartDetail">

            </div>
        </div>
    )
}
export default ShowCart;
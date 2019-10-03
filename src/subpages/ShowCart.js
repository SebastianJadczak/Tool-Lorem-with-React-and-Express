import React from 'react'
import '../styles/ShowCart.css'
import ProductMini from './ProductMini'

const ShowCart = (props) => {
    const { MyCart, handleCart } = props
    console.log(MyCart)
    const listMyProductsInMyCart = MyCart.map(item => (
        <li key={MyCart.length++}><ProductMini name={item.productName} description={item.productDescription} price={item.productPrice} deleteProduct={props.deleteProduct} /> </li>
    ))
    return (
        <div className="showCart">
            <div className="closeShowCart" onClick={handleCart}><span>X</span></div>
            <div className="cartDetail">
                <ul>{listMyProductsInMyCart}</ul>
            </div>
            <div className="nextStep"><button className="nextStep" onClick={props.nextStep}>Dalej</button></div>
        </div>
    )
}
export default ShowCart;
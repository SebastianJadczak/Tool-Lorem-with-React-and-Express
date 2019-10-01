import React from 'react'

const Product = (props) => {


    return (
        <div className="product">
            <h3>{props.name}</h3>
            <div className="image"></div>
            <p className="description"> {props.description}</p>
            <div className="price"><span>{props.price} </span><button onClick={() => props.addProductToCart(props.nr)}>Dodaj!</button></div>
        </div>
    )
}
export default Product;
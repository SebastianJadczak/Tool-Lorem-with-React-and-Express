import React from 'react'

const Product = (props) => {

    return (
        <div className="product">
            <h3>{props.name}</h3>
            <p>{props.id} {props.description}</p>
            <p>{props.price}</p>
            <button>Dodaj!</button>
        </div>
    )
}
export default Product;
import React from 'react'

const ProductMini = (props) => {

    return (
        <div className="productMini">

            <h3>{props.name}</h3>
            <div ></div>
            <p >{props.description}</p>
            <div className="deleteProduct" onClick={() => props.deleteProduct(props.name)}><span>X</span></div>
            <div><span>{props.price} </span></div>
        </div>
    )
}
export default ProductMini;
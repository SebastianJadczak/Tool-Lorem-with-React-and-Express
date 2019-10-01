import React from 'react'

const ProductMini = (props) => {

    return (
        <div >
            <h3>{props.name}</h3>
            <div ></div>
            <p >{props.description}</p>
            <div><span>{props.price} </span></div>
        </div>
    )
}
export default ProductMini;
import React, { Component } from 'react';
import '../styles/SitAmet.css'
import Product from './Product'
import Cart from './Cart'
import ShowCart from './ShowCart'

class SitAmet extends Component {

    state = {
        products: [],
        text: "",
        amountProducts: null,
        showCart: false,
        MyCart: []
    }


    componentDidMount = () => {
        fetch('/SitAmetProducts', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    products: data.prod
                })
            })
    }

    addProductToCart = (id, name, description, price) => {
        fetch(`/addProductToCart/${id}/${name}/${description}/${price}`, {
            method: 'POST'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    text: data.data,
                    amountProducts: data.cartLength,
                    MyCart: data.MyCart
                })

            })

    }
    handleCart = () => {
        this.setState(prevState => ({
            showCart: !prevState.showCart
        }))

    }
    deletePruductWithCart = (name) => {
        fetch(`/deleteProductWithCart/${name}`, {
            method: 'POST'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    amountProducts: data.cartLength,
                    MyCart: data.MyCart
                })

            })
    }

    render() {
        const listProduct = this.state.products.map(item => (
            <li key={item.id}><Product nr={item.id} name={item.name} description={item.description} price={item.price} addProductToCart={this.addProductToCart} /></li>
        ))
        return (
            <div className="SitAmet">
                <div className="title"><h3>Sit Amet, Welcome!</h3></div>
                <div className="cart" onClick={this.handleCart}><Cart amountProducts={this.state.amountProducts} /></div>
                {this.state.text ? <p className="addedProduct">{this.state.text}</p> : null}
                <div className="products">
                    <ul className="productsList">{listProduct}</ul>
                </div>
                {this.state.showCart ? <ShowCart handleCart={this.handleCart} MyCart={this.state.MyCart} deleteProduct={this.deletePruductWithCart} /> : null}
            </div>
        )
    }
}
export default SitAmet;
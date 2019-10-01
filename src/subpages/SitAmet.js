import React, { Component } from 'react';
import '../styles/SitAmet.css'
import Product from './Product'


class SitAmet extends Component {

    state = {
        products: []
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

    render() {
        console.log(this.state.products)

        const listProduct = this.state.products.map(item => (
            <li key={item.id}><Product nr={item.id} name={item.name} description={item.description} price={item.price} /></li>
        ))
        return (
            <div className="SitAmet">
                <div className="title"><h3>Sit Amet, Welcome!</h3></div>
                <div className="products">
                    <ul className="productsList">{listProduct}</ul>
                </div>
            </div>
        )
    }
}
export default SitAmet;
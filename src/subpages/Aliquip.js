import React, { Component } from 'react';
import YourData from "./YourData";

import MenuData from "./MenuData"
import "../styles/Aliquip.css"

class Aliquip extends Component {
    state = {
        dataProfile: []
    }

    handleShowData = () => {

    }



    componentDidMount() {

        fetch('/getDataProfile', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    dataProfile: data
                })
            })
    }

    render() {
        return (
            <div className="Aliquip">
                <MenuData handleShowData={this.handleShowData} />
                <YourData />
            </div>
        )
    }
}
export default Aliquip;
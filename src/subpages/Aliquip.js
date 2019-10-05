import React, { Component } from 'react';
import YourData from "./YourData";

import MenuData from "./MenuData"
import "../styles/Aliquip.css"


class Aliquip extends Component {
    state = {
        dataProfile: [],
        id: null,
    }

    handleShowData = (id) => {
        this.setState({
            id: id
        })

    }




    componentDidMount() {

        fetch('/getDataProfile', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    dataProfile: data.data
                })
            })
    }

    render() {
        return (
            <div className="Aliquip">
                <MenuData handleShowData={this.handleShowData} />
                <YourData page={this.state.id} />
            </div>
        )
    }
}
export default Aliquip;
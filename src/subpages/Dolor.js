import React, { Component } from 'react';
import '../styles/Dolor.css'
import ToDo from "./ToDo.js"
import InProgress from "./InProgress.js"
import Done from "./Done.js"

class Dolor extends Component {

    state = {
        zz: []
    }
    componentDidMount() {
        fetch('/DolorCanban', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {

                this.setState({
                    zz: data.data
                })
            })
    }

    handleDrag = (event) => {
        event.dataTransfer.setData("Text", event.target.id)
        event.target.style.opacity = "0.4"
    }
    handleDragend = (event) => {
        event.target.style.border = "3px dotted red";
    }

    render() {

        return (
            <div className="Dolor">
                <div className="toDo" >
                    <ToDo list={this.state.zz} handleDrag={this.handleDrag} />
                </div>
                <div className="inProgress">
                    <InProgress list={this.state.zz} />
                </div>
                <div className="done">
                    <Done list={this.state.zz} />
                </div>
            </div>
        )
    }
}
export default Dolor;
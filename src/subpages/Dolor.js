import React, { Component } from 'react';
import '../styles/Dolor.css'
import ToDo from "./ToDo.js"
import InProgress from "./InProgress.js"
import Done from "./Done.js"


class Dolor extends Component {

    state = {
        zz: [],
        changeTask: {}
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

    onDragStart = (id, content, status) => {

        this.setState({
            changeTask: {
                idElement: id,
                contentElement: content,
                statusElement: status
            }
        })

    }
    onDragOver = (e) => {
        e.preventDefault()
    }
    onDrop = () => {

        const {
            idElement,
            contentElement,
            statusElement,
        } = this.state.changeTask
        // console.log(this.state.changeTask)
        fetch(`/Dolor/${idElement}/${contentElement}/${statusElement}`, {
            method: 'POST'
        })
    }
    render() {

        return (
            <div className="Dolor">
                <div className="toDo" >
                    <ToDo list={this.state.zz} onDragStart={this.onDragStart} />
                </div>
                <div className="inProgress">
                    <InProgress list={this.state.zz} onDragOver={this.onDragOver} onDrop={this.onDrop} />
                </div>
                <div className="done">
                    <Done list={this.state.zz} />
                </div>
            </div>
        )
    }
}
export default Dolor;
import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/Ipsum.css'

class Ipsum extends Component {
    state = {
        input: "",
        answer: "",
        zz: [],
        title: "",
        if: false
    }


    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })

    }
    addTask = () => {

        fetch(`/addTask/${this.state.input}`, {
            method: 'POST'
        })

            .then(r => r.json())
            .then(data => {
                this.setState({
                    answer: data.data,
                    if: true,
                })
            })
    }

    componentDidMount() {
        fetch('/ipsumTaskList', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {

                this.setState({
                    zz: data.data
                })
            })
    }
    componentDidUpdate() {
        if (this.state.if) {
            fetch('/ipsumTaskList', {
                method: 'GET'
            })
                .then(r => r.json())
                .then(data => {

                    this.setState({
                        input: "",
                        zz: data.data,
                        if: false,
                    })
                })
        }
    }


    render() {
        return (
            <>
                {this.state.answer ? this.state.answer : null}
                <AddTask handleChange={this.handleChange} addTask={this.addTask} value={this.state.input} />
                <TaskList zz={this.state.zz} />
            </>
        )
    }
}
export default Ipsum;
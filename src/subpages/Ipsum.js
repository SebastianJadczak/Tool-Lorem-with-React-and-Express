import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/Ipsum.css'

class Ipsum extends Component {
    state = {
        input: "",
        answer: "",
        zz: [],
        title: ""
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
                    input: "",
                })
            })



    }

    componentDidMount() {
        fetch('/ipsumTaskList', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                // this.addNew(data)
                this.setState({
                    zz: data.data
                })
            })


    }
    render() {
        return (
            <>
                {this.state.answer ? this.state.answer : null}
                <AddTask handleChange={this.handleChange} addTask={this.addTask} />
                <TaskList zz={this.state.zz} />
            </>
        )
    }
}
export default Ipsum;
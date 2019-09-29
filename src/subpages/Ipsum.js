import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/Ipsum.css'

class Ipsum extends Component {
    state = {
        input: "",
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
        this.setState({
            input: ""
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
                <AddTask handleChange={this.handleChange} addTask={this.addTask} />
                <TaskList zz={this.state.zz} />
            </>
        )
    }
}
export default Ipsum;
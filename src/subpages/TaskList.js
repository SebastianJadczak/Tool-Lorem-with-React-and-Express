import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {

    state = {
        zz: [],
        title: ""
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
        const list = this.state.zz.map(item => (
            <li key={item.id}><Task content={item.content} /> </li>
        ))
        return (
            <div className="taskList">
                <h3 className="TaskListTitle">Lista zadań: </h3>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
export default TaskList;
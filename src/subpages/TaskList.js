import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {

    render() {
        return (
            <div className="taskList">
                <p>TaskList</p>
                <Task />
            </div>
        )
    }
}
export default TaskList;
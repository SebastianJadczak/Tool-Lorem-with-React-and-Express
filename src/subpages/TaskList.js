import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {

    render() {
        return (
            <div className="taskList">
                <h3 className="TaskListTitle">TaskList</h3>
                <Task />
            </div>
        )
    }
}
export default TaskList;
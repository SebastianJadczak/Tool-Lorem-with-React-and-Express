import React from 'react';
import Task from './Task'

const TaskList = (props) => {


    const list = props.zz.map(item => (
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

export default TaskList;
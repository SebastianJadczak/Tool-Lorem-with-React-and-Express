import React from 'react';

const Task = (props) => {
    return (
        <div className="Task">
            <h3>Zadanie:</h3>
            <p>{props.content}</p>
        </div>
    )
}
export default Task;
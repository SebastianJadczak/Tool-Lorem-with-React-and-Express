import React from 'react';
import Element from './Element'

const ToDo = (props) => {

    const toDo = props.list.filter(task => task.status === "toDo");

    const toDoList = toDo.map(item =>
        <li key={item.id}> <Element content={item.content} handleDrag={props.handleDrag} /></li>
    )

    return (
        <>
            <h3>Do zrobienia: </h3>
            <ul>{toDoList}</ul>
        </>
    )
}
export default ToDo
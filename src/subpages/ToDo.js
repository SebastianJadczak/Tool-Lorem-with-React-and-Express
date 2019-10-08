import React from 'react';
import Element from './Element'

const ToDo = (props) => {

    const toDo = props.list.filter(task => task.status === "toDo");

    const toDoList = toDo.map(item =>
        <li key={item.id} draggable="true" onDragStart={() => props.onDragStart(item.id, item.content, item.status)}> <Element content={item.content} /></li >
    )

    return (
        <div>
            <h3>Do zrobienia: </h3>
            <ul>{toDoList}</ul>
        </div>
    )
}
export default ToDo
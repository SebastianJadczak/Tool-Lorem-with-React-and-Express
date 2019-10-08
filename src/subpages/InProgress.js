import React from "react";
import Element from './Element'
const InProgress = (props) => {


    const inProgresso = props.list.filter(task => task.status === "InProgress");

    const inProgressList = inProgresso.map(item =>
        <li key={item.id} draggable="true" onDragStart={props.onDragStart} onDrop={props.onDrop}> <Element content={item.content} /></li>
    )

    return (
        <div className="inProgressDiv" onDragOver={props.onDragOver} onDrop={props.onDrop}>
            <h3>W trakcie: </h3>
            {inProgressList}
        </div>
    )
}
export default InProgress
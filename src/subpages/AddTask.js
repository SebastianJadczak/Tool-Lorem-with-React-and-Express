import React from 'react';

const AddTask = (props) => {

    return (
        <div className="addTask">
            <input type="text" placeholder="Wpisz zadanie" value={props.value} onChange={props.handleChange} />
            <button className="addTask" onClick={props.addTask}>Dodaj zadanie</button>
        </div>
    )
}

export default AddTask
import React from 'react';

const Element = (props) => {
    return (
        <div className="element" >
            <p className="elementTitle">Zadanie: </p>
            <p className="content">{props.content}</p>
        </div>
    )
}
export default Element;
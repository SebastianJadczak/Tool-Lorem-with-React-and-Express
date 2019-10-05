import React from "react";


const listData = [
    { id: 1, name: "Przegląd" },
    { id: 2, name: "Podstawowe informacje" },
    { id: 3, name: "Praca" },
    { id: 4, name: "Wykształcenie" },
    { id: 5, name: "Praca" },
    { id: 6, name: "Rodzina i związki" },
    { id: 7, name: "Szczegółowe informacje" }
]


const MenuData = (props) => {

    const menu = listData.map(item => (
        <li key={item.id} onClick={() => props.handleShowData(item.id)}> {item.name} </li>
    ))

    return (
        <div className="MenuData">
            <ul>
                {menu}
            </ul>
        </div>
    )
}
export default MenuData;
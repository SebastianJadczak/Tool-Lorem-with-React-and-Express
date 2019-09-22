import React from 'react'
import { NavLink } from 'react-router-dom'

const list = [
    { id: 1, title: "Lorem", path: "/" },
    { id: 2, title: "Ipsum", path: "/ipsum" },
    { id: 3, title: "Dolor", path: "/dolor" },
    { id: 4, title: "Sit Amet", path: "/sitAmet" },
    { id: 5, title: "Aliquip", path: "/aliquip" }
]


const Navigation = () => {


    const menu = list.map(item => (
        <li key={item.id}> <NavLink key={item.id} to={item.path} >{item.title}</NavLink></li>
    ))

    return (
        <div className="nav">
            <ul>
                {menu}
            </ul>
        </div>
    )
}

export default Navigation;
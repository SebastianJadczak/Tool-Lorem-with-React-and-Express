import React from 'react'
import QA from '../img/photo.jpg'
import { NavLink } from 'react-router-dom'

const list = [
    { id: 1, title: "First link", path: "/firstLink" },
    { id: 2, title: "Second link", path: "/secondLink" },
    { id: 3, title: "Three link", path: "/threeLink" }
]

const UsefulLinks = () => {

    const links = list.map(item => (
        <li key={item.id}><NavLink to={item.path}>{item.title}</NavLink></li>
    ))

    return (
        <>
            <div className="qa">
                <img src={QA} alt="zdjęcie" />
            </div>
            <div className="links">
                <h3>Duis aute inure dolor</h3>
                <ul>{links}</ul>
            </div>
        </>
    )
}
export default UsefulLinks; 
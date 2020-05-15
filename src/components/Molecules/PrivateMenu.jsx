import React from 'react'
import { NavLink } from 'react-router-dom'

//solo cambiara el logo de usuario si es usuario logueado y debe mostrar un modal de opciones 
const removeToken = ()=>{
    localStorage.removeItem('token')
    window.location="/"
}

const PrivateMenu = () =>{
    return (
        <ul className="display-menu">
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
        </ul>
    )
}

export default PrivateMenu
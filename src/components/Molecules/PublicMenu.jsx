import React from 'react'
import { NavLink } from 'react-router-dom'

//solo cambiara el logo de usuario si no es usuario mas mostrar un modal si se desear loguear
const PublicMenu = () =>{

    return (
        <ul className="display-menu">
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
        </ul>

    )

}

export default PublicMenu
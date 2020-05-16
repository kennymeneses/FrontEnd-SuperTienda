import React from 'react'
import { NavLink } from 'react-router-dom'

//solo cambiara el logo de usuario si no es usuario mas mostrar un modal si se desear loguear
const PublicMenu = () =>{

    return (
        <ul className="display-menu">
            <li className="display-menu-item">
                <NavLink className="link-nav" exact to="/">
                    <img className="logo-usuario"
                         src="https://giftcards.woolworths.com.au/_ui/responsive/common/images/User_icon_white.png" 
                         alt="logo_del_usuario"/>
                </NavLink>
            </li>

            <li className="display-menu-item">
                <NavLink className="link-nav" exact to="/">
                    <img className="logo-cart"
                         src="https://pluspng.com/img-png/shop-png-black-and-white--512.png" 
                         alt="logo_del_carrito"/>
                </NavLink>
            </li>
        </ul>

    )

}

export default PublicMenu
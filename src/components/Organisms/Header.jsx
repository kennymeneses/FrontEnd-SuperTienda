import React, { useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'

const Header = ()=>{

return(
    <header className="main-header">
        <div className="container-header">

            <div className="main-menu-toogle">

            </div>

            <div className="container-logo">
                <NavLink className="link" to ="/">
                    <img
                        className="main-logo" 
                        src="https://www.stickpng.com/assets/images/5900c7e516ae4b3fc58f4824.png" 
                        alt="Logo Principal"/>
                </NavLink>
            </div>
            
            <div className="container-nav">
                <nav className="main-nav">
                {
                    localStorage.getItem('token') ? 
                    <PrivateMenu />:
                    <PublicMenu />
                }
                </nav>
            </div>

            <div className="container-user">
                <NavLink className="link" to="/">
                    <img
                        className="user-logo" 
                        src="data:image/png;base64,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" 
                        alt="logo del usuario"
                    />
                </NavLink>
            </div>

        </div>
    </header>
)

}

export default Header
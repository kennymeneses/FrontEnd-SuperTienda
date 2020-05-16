import React, { useRef, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'

const Header = ()=>{

return(
    <header className="main-header">
        <div className="aviso-importante-header">
            <Link className="aviso-link">TENEMOS DESCUENTOS DE HASTA EL 50% EN EL AREA DE LINEA BLANCA TODO EL MES!</Link>
        </div>

        <div className="container-header">

            <div className="toogle-container">
                <div className="main-menu-toogle" onClick={()=>console.log('holis')}></div>
                <div className="aviso-toogle" >menú</div>    

                
            </div>

            <div className="container-logo">
                <NavLink className="link" to ="/">
                    <img
                        className="main-logo" 
                        src="https://maquillaje.com/es-mx/wp-content/uploads/sites/2/2019/04/Walmart-Logo-PNG-Transparent.png" 
                        alt="Logo Principal"/>
                </NavLink>
            </div>
            
            <div className="container-busqueda">
                <input className="banner-busqueda" type="text" placeholder="Buscar Producto"/>
                
                <Link>
                <img
                    className="icon-busqueda" 
                    src="https://lh3.googleusercontent.com/proxy/0rdowQoF1wPBa0jFYvTWiy-PJ2u9cREgBRnIAxJWxNhoGLXhSNB7KmV08BOORKqZYmljrxWoegWiCHndnJvuSFXSVZworDzrSZB-lgizotFZbvbc" 
                    alt="icono_busqueda"/>
                </Link>
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


        </div>

        <div className="header-list-categories-container">

        </div>

        <div className="mobil-busqueda-container">
        <input className="banner-busqueda-2" type="text" placeholder="Buscar Producto"/>
                
                <Link className="link-m-logo-busqueda">
                <img
                    className="icon-busqueda-2" 
                    src="https://lh3.googleusercontent.com/proxy/0rdowQoF1wPBa0jFYvTWiy-PJ2u9cREgBRnIAxJWxNhoGLXhSNB7KmV08BOORKqZYmljrxWoegWiCHndnJvuSFXSVZworDzrSZB-lgizotFZbvbc" 
                    alt="icono_busqueda"/>
                </Link>
        </div>            

    </header>
)

}

export default Header
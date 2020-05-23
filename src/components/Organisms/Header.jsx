import React, { useRef, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'
import BannerCategories from '../Molecules/BannerCategories'


const Header = ({})=>{

    useEffect(() => {
       
            console.log('useEffect Header starts')
      },[])

return(
    <header className="main-header">
        <div className="aviso-importante-header">
            <Link to ="/" className="aviso-link">TENEMOS DESCUENTOS DE HASTA EL 50% EN EL AREA DE LINEA BLANCA TODO EL MES!</Link>
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
                
                <Link to ="/">
                <img
                    className="icon-busqueda" 
                    src="https://iconbug.com/data/e2/507/3940585a2d442b4a263055de85b1318f.png" 
                    alt="icono_busqueda"/>
                </Link>
            </div>

            <div className="container-perfil">
                <div className="main-perfil">
                {
                    localStorage.getItem('token') ? 
                    <PrivateMenu />:
                    <PublicMenu />
                }
                </div>
            </div>


        </div>

        <div className="header-list-categories-container">
                <BannerCategories />
        </div>

        <div className="mobil-busqueda-container">
        <input className="banner-busqueda-2" type="text" placeholder="Buscar Producto"/>
                
                <Link to ="/" className="link-m-logo-busqueda">
                <img
                    className="icon-busqueda-2" 
                    src="https://iconbug.com/data/e2/507/3940585a2d442b4a263055de85b1318f.png" 
                    alt="icono_busqueda"/>
                </Link>
        </div>            

    </header>
)}

            

// const mapStateToProps = state =>(
//     {
//         thecategories : state.categoriaReducer.categories
//     }
// )


export default (Header)
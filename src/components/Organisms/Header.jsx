import React, { useRef, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../redux/store'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'
import BannerCategories from '../Molecules/BannerCategories'
import { getallproductsx } from '../../redux/actionCreators'


const Hola = (parametro)=>{
    console.log('Se hace la busqueda');
    store.dispatch(getallproductsx(parametro));
}

const Header = ({ProductsFind})=>{

const input_busqueda = useRef(null)
const input_busqueda_m = useRef(null)

    useEffect(() => {
       
            console.log('useEffect Header starts')
            
      },[])

return(
    <header className="main-header">
        <div className="aviso-importante-header" >
            <Link to ="/" className="aviso-link">TENEMOS DESCUENTOS DE HASTA EL 50% EN EL AREA DE LINEA BLANCA TODO EL MES!</Link>
        </div>

        <div className="container-header">

            <div className="toogle-container">
                <div className="main-menu-toogle" onClick={()=>console.log('aqui se mostrara las categorias version movil')}></div>
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
                <input className="banner-busqueda" ref={input_busqueda} type="text" placeholder="Buscar Producto"/>
                
                <Link to ="/busqueda" onClick={()=>{Hola(input_busqueda.current.value)}}>
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

        <div className="header-list-categories-container" >
                <BannerCategories />
        </div>

        <div className="mobil-busqueda-container">
            <input className="banner-busqueda-2" ref={input_busqueda_m} type="text" placeholder="Buscar Producto"/>
                
                <Link to ="/busqueda" className="link-m-logo-busqueda" onClick={()=>{Hola(input_busqueda_m.current.value)}}>
                <img
                    className="icon-busqueda-2" 
                    src="https://iconbug.com/data/e2/507/3940585a2d442b4a263055de85b1318f.png" 
                    alt="icono_busqueda"/>
                </Link>
        </div>            

    </header>
)}

            

const mapStateToProps = state =>(
    {
        ProductsFind : state.productoReducer.productss
    }
)

const mapDispatchToProps=(dispatch)=>(
    {
    
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
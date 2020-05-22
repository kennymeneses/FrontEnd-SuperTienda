import React, { useRef, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BannerCategories =({categories, subcategories, subsubcategories})=>{

    useEffect(() => {
       
        console.log('useEffect Banner starts')
  },[])
    if(categories && subsubcategories)
        {
            return (
                <div className="sub-list-container">


                    <label htmlFor="">{console.log('se inicia el banner')}</label>
                    <label htmlFor="">{console.log(categories)}</label>
                    <div>{console.log(subcategories)}</div>
                    <div>{console.log(subsubcategories)}</div>
                    {/* {categories.map(c =><Link className="link-categorias" to={'/catalogo/' + c.NombreCategoria} 
                        key={c.IdCategoria}>{c.NombreCategoria}</Link> )} */}

            <ul className="display-menu">
                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/tecnologias">Tecnologias</NavLink>
                    <div className="cuadro-blue">
                        <div className="sub-categorias-container">
                            <div className="sub-categoria-televisores">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/televisores">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/tv+24px-131985226362026967.png" alt="logo_tv"/>
                                    Tv Televisores
                                </Link>
                                    <Link className="sub-sub-categoria-link">Televisores 4K</Link>
                                    <Link className="sub-sub-categoria-link">Televisores LED</Link>
                                    <Link className="sub-sub-categoria-link">Soundbars y Home Theaters</Link>
                                    <Link className="sub-sub-categoria-link">Racks</Link>
                                    <Link className="sub-sub-categoria-link">Acesorios TV</Link>
                            </div>
                            <div className="sub-categoria-computadoras">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/computadoras">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/laptop+chromebook+48px-131985226037872414.png" alt="logo_laptops"/>
                                    Computadoras
                                </Link>
                                    <Link className="sub-sub-categoria-link">Laptops</Link>
                                    <Link className="sub-sub-categoria-link">Laptops Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Laptops Tablets</Link>
                                    <Link className="sub-sub-categoria-link">All in One</Link>
                                    <Link className="sub-sub-categoria-link">Impresores multifuncionales</Link>
                                    <Link className="sub-sub-categoria-link">Almaceamiento</Link>
                                    <Link className="sub-sub-categoria-link">Monitores</Link>
                                    <Link className="sub-sub-categoria-link">Accesorios Computacion</Link>
                            </div>
                            <div className="sub-categoria-fotografia">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/fotografia">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/laptop+chromebook+48px-131985226037872414.png" alt="logo_camara"/>
                                    Fotografia
                                </Link>
                                    <Link className="sub-sub-categoria-link">Camaras Profesionales</Link>
                                    <Link className="sub-sub-categoria-link">Camaras SemiProfesionales</Link>
                                    <Link className="sub-sub-categoria-link">Camaras de video</Link>
                                    <Link className="sub-sub-categoria-link">Camaras Instantaneas y Retro</Link>
                                    <Link className="sub-sub-categoria-link">Acesorios</Link>
                            </div>
                            <div className="sub-categoria-telefonos">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/telefonos">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/phone+android+48px-131985226126130808.png" alt="logo_celulares"/>
                                    Telefonos
                                </Link>
                                    <Link className="sub-sub-categoria-link">Celulares y Smartphones</Link>
                                    <Link className="sub-sub-categoria-link">Smartwatch</Link>
                                    <Link className="sub-sub-categoria-link">Audifonos</Link>
                                    <Link className="sub-sub-categoria-link">Cargadores y Cables</Link>
                                    <Link className="sub-sub-categoria-link">Baterias Externas</Link>
                                    <Link className="sub-sub-categoria-link">Carcasas y Laminas</Link>
                                    <Link className="sub-sub-categoria-link">Parlantes</Link>
                                    <Link className="sub-sub-categoria-link">Tarjetas de memorias</Link>
                            </div>
                            <div className="sub-categoria-videojuegos">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/videojuegos">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/videogame+asset+24px-131985226374135005.png" alt="logo_videojuegos"/>
                                    VideoJuegos
                                </Link>
                                    <Link className="sub-sub-categoria-link">Consolas</Link>
                                    <Link className="sub-sub-categoria-link">PS4</Link>
                                    <Link className="sub-sub-categoria-link">Nintendo Switch</Link>
                                    <Link className="sub-sub-categoria-link">Juegos</Link>
                                    <Link className="sub-sub-categoria-link">Accesorios</Link>
                            </div>
                            <div className="sub-categoria-audio">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/audio">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/speaker+48px-131985226273728547.png" alt="logo_audio"/>
                                    Audio
                                </Link>
                                    <Link className="sub-sub-categoria-link">Equipos de Sonido</Link>
                                    <Link className="sub-sub-categoria-link">Audifonos</Link>
                                    <Link className="sub-sub-categoria-link">Instrumentos Musicales</Link>
                                    <Link className="sub-sub-categoria-link">AutoRadios</Link>
                                    <Link className="sub-sub-categoria-link">Parlantes</Link>
                                    <Link className="sub-sub-categoria-link">Karaoke</Link>
                            </div>
                            <div className="sub-categoria-pcgaming">
                                <Link className="sub-categoria-link" to="/catalogo/teconologias/pc-gaming">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/keyboard+hide+24px-131985225933305123.png" alt="logo_audio"/>
                                    Pc Gaming
                                </Link>
                                    <Link className="sub-sub-categoria-link">Laptops Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Monitores</Link>
                                    <Link className="sub-sub-categoria-link">Audifonos Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Coolers</Link>
                                    <Link className="sub-sub-categoria-link">Mouses Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Teclados Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Sillas Gamer</Link>
                                    <Link className="sub-sub-categoria-link">Accesorios Gamer</Link>
                            </div>  

                        </div>
                        <div className="categoria-logo">
                            <img className="categoria-logo-img" src="https://www.pngkey.com/png/full/0-113_desktop-msi-cx700-053us-17-3-notebook-pentium-2.png" alt="logo_tecnologia"/>
                        </div>
                    </div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/muebles">Muebles</NavLink>
                {/* <div className="cuadro-blue"></div> */}
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/linea_blanca">Linea Blanca</NavLink>
                {/* <div className="cuadro-blue"></div> */}
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/deporte">Deporte</NavLink>
                    <div className="cuadro-blue">
                        <div>Prendas Hombre</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/infantil">Infantil</NavLink>
                {/* <div className="cuadro-blue"></div> */}
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/ropa">Ropa</NavLink>
                {/* <div className="cuadro-blue"></div> */}
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/accesorios">Accesorios</NavLink>
                {/* <div className="cuadro-blue"></div> */}
                </li>

            </ul>

                        
                    
                </div>
                
            )
        }
    else
        {
        return(
            <div className="sub-list-container">
                <label htmlFor="">{console.log('se inicia la opcion del banner')}</label>
            </div>
                )
        }
}


const mapStateToProps = state =>(
    {
        categories : state.categoriaReducer.categories,
        subcategories : state.subcategoriaReducer.subcategories,
        subsubcategories : state.subsubcategoriaReducer.subsubcategories
    }
)

export default connect(mapStateToProps)(BannerCategories)
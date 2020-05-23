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
                    <div className="cuadro-blue">
                        <div className="sub-categorias-container">
                            <div className="sub-categoria-muebles">
                                <Link className="sub-categoria-link" to="/catalogo/muebles/muebles">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/beds-1320567788374647065.png" alt="logo_muebles"/>
                                    Muebles
                                </Link>
                                    <Link className="sub-sub-categoria-link">Sofas</Link>
                                    <Link className="sub-sub-categoria-link">Juegos de Sala</Link>
                                    <Link className="sub-sub-categoria-link">Comedores</Link>
                                    <Link className="sub-sub-categoria-link">Centros de Entretenimiento</Link>
                                    <Link className="sub-sub-categoria-link">Sillas y Butacas</Link>
                                    <Link className="sub-sub-categoria-link">Sillones Reclinables</Link>
                                    <Link className="sub-sub-categoria-link">Bares</Link>
                                    <Link className="sub-sub-categoria-link">Escritorio</Link>
                                    <Link className="sub-sub-categoria-link">Estantes y libreros</Link>
                                    <Link className="sub-sub-categoria-link">Roperos y Comodas</Link>
                                    <Link className="sub-sub-categoria-link">Muebles de Cocina</Link>
                            </div>
                            <div className="sub-categoria-muebles-infantiles">
                                <Link className="sub-categoria-link" to="/catalogo/muebles/muebles-infantiles">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/decor-1320567788997260783.png" alt="logo_muebles-infantiles"/>
                                    Muebles Infantiles
                                </Link>
                                    <Link className="sub-sub-categoria-link">Cunas y camas para ninos</Link>
                                    <Link className="sub-sub-categoria-link">Organizacion Infantil</Link>
                                    <Link className="sub-sub-categoria-link">Sillas y Mesas</Link>
                                    <Link className="sub-sub-categoria-link">Comodas y Cambiadores</Link>
                            </div>
                            <div className="sub-categoria-terrazas">
                                <Link className="sub-categoria-link" to="/catalogo/muebles/terrazas">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/panels-1320567790219172468.png" alt="logo_terrazas"/>
                                    Terrazas
                                </Link>
                                    <Link className="sub-sub-categoria-link">Sofas, Sillones y Mesas</Link>
                                    <Link className="sub-sub-categoria-link">Complementos</Link>
                                    <Link className="sub-sub-categoria-link">Toldos y Sombrillas</Link>
                                    <Link className="sub-sub-categoria-link">Terrazas Pequenas</Link>
                                    <Link className="sub-sub-categoria-link">Decoracion</Link>
                            </div>
                        </div>
                        <div className="categoria-logo">
                            <img className="categoria-muebles-logo-img" src="https://www.vippng.com/png/full/228-2283149_smith-brothers-sofa-mattress-brothers-living-rooms.png" alt="logo_muebles"/>
                        </div>
                    </div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/linea_blanca">Linea Blanca</NavLink>
                    <div className="cuadro-blue">
                        <div className="sub-categorias-container">
                            <div className="sub-categoria-refrigeracion">
                                <Link className="sub-categoria-link" to="/catalogo/linea_blanca/refrigeracion">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/beds-1320567788374647065.png" alt="logo_refrigeracion"/>
                                    Refrigeracion
                                </Link>
                                    <Link className="sub-sub-categoria-link">Refrigeradores</Link>
                                    <Link className="sub-sub-categoria-link">Side by Side</Link>
                                    <Link className="sub-sub-categoria-link">Frigobares</Link>
                                    <Link className="sub-sub-categoria-link">Congeladores</Link>
                            </div>
                            <div className="sub-categoria-climatizacion">
                                <Link className="sub-categoria-link" to="/catalogo/linea_blanca/climatizacion">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/decor-1320567788997260783.png" alt="logo_climatizacion"/>
                                    Climatizacion
                                </Link>
                                    <Link className="sub-sub-categoria-link">Ventiladores</Link>
                                    <Link className="sub-sub-categoria-link">Aires Acondicionados</Link>
                                    <Link className="sub-sub-categoria-link">Calefactores</Link>
                                    <Link className="sub-sub-categoria-link">Deshumedecedores</Link>
                                    <Link className="sub-sub-categoria-link">Termas</Link>
                                    <Link className="sub-sub-categoria-link">Duchas Electricas</Link>
                            </div>
                            <div className="sub-categoria-lavado">
                                <Link className="sub-categoria-link" to="/catalogo/linea_blanca/lavado">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/panels-1320567790219172468.png" alt="logo_lavado"/>
                                    Lavado
                                </Link>
                                    <Link className="sub-sub-categoria-link">Lavadoras</Link>
                                    <Link className="sub-sub-categoria-link">Secadoras</Link>
                                    <Link className="sub-sub-categoria-link">LavaSecas</Link>
                                    <Link className="sub-sub-categoria-link">LavaVajillas</Link>
                            </div>
                            <div className="sub-categoria-cuidado-personal">
                                <Link className="sub-categoria-link" to="/catalogo/linea_blanca/cuidado-personal">
                                    <img className="sub-categoria-logo" src="https://icons-for-free.com/iconfiles/png/512/decor-1320567788997260783.png" alt="logo_cuidado_personal"/>
                                    Climatizacion
                                </Link>
                                    <Link className="sub-sub-categoria-link">Depiladoras</Link>
                                    <Link className="sub-sub-categoria-link">Secadoras de cabello</Link>
                                    <Link className="sub-sub-categoria-link">Alisadoras y Rizadores</Link>
                                    <Link className="sub-sub-categoria-link">Maquina de afeitar</Link>
                                    <Link className="sub-sub-categoria-link">Cortadoras de Cabello</Link>
                                    <Link className="sub-sub-categoria-link">Masajeadores</Link>
                                    <Link className="sub-sub-categoria-link">Cuidado Facial</Link>
                                    <Link className="sub-sub-categoria-link">Otros Cuidados Personales</Link>
                            </div>
                        </div>
                        <div className="categoria-logo">
                            <img className="categoria-muebles-logo-img" src="https://www.pngmart.com/files/8/Kitchen-PNG-Photo-Image.png" alt="logo_muebles"/>
                        </div>
                    </div>
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
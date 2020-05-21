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
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/muebles">Muebles</NavLink>
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/linea_blanca">Linea Blanca</NavLink>
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/deporte">Deporte</NavLink>
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/infantil">Infantil</NavLink>
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/ropa">Ropa</NavLink>
                <div className="cuadro-blue"></div>
                </li>

                <li className="display-menu-item"><NavLink className="link-categorias" to="/catalogo/accesorios">Accesorios</NavLink>
                <div className="cuadro-blue"></div>
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
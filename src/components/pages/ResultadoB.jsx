import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const ResultadoB=({ProductsFind})=>{
    

    useEffect(() => {        
  },[])
    

    // if(typeof(ProductsFind[0]) === 'undefined' )
    // {
    //     return(
    //         <div className="page-content">
    //             No existen Resultados de la busqueda
    //         </div>
    //     )
    // } 

    if(typeof(ProductsFind) != 'undefined')
    {   
        
        if(ProductsFind[0])
        
        {
            return(
            <div className="page-content-busqueda">
                {/* {ProductsFind[0].nombreproducto} */}
                {ProductsFind.map(e=>(
                    <div className="container-resultados">
                        <img className="img-resultados" src={e.imagenurl} alt={e.nombreproducto}/>
                        <div>{e.nombreproducto}</div>
                        <div>{e.codigo}</div>
                        <div>{e.fabricante}</div>
                        
                    </div>
                ))}
            </div>
            )
        }

        else{
            return(
                <div className="page-content">
                    No existen Productos en la busqueda realizada
                </div>
            )
        }
    }
    
    else
    {
        return(
            <div className="page-content">
                Cargando
            </div>
        )
    }
}
    
    const mapStateToProps = state =>(
        {
            ProductsFind : state.productoReducer.productss
        }
    )

export default connect(mapStateToProps)(ResultadoB)
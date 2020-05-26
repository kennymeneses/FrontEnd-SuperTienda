import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getuser } from '../../redux/actionCreators'
import { mostrar_modal, close_modal } from './scripts'

const removeToken = ()=>{
    localStorage.removeItem('token')
    window.location="/"
}

const PrivateMenu = ({user}) =>{

    const modal_info_user=useRef(null)

    useEffect(() => {
    
        const idUsuario = localStorage.getItem('idUsuario')

        store.dispatch(getuser(idUsuario))

        console.log(idUsuario)
    
    },[])

    if(user)
    {
        return (
                <div className="main-perfil-container">

                    
                    <div className="link-nav-user" onClick={()=>mostrar_modal(modal_info_user.current)}>
                        <img className="logo-usuario-logueado"
                            src={user.imagenUrl}
                            alt="logo_del_usuario"/>                    
                    </div>
                    
                    <div className="modal-info-user" ref={modal_info_user}>


                        <div className="box-modal-info-user">

                            <div className="close-modal-login" onClick={()=>close_modal(modal_info_user.current)}>
                                <img className="logo-close-modal-login"
                                    src="https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png" 
                                    alt="close-modal"/>
                            </div>

                            <div className="cerrar-sesion-container" onClick={()=>removeToken()}>
                                <img 
                                className="logo-cerrar-sesion"
                                src="https://i.dlpng.com/static/png/6971560_preview.png" 
                                alt="close_session"/>
                                <span className="cerrar-sesion">Cerrar Sesion</span>
                            </div>
                        </div>
                    </div>

                    <div className="link-nav-cart" onClick={()=>removeToken()}>
                        <  img className="logo-cart"
                            src="https://pluspng.com/img-png/shop-png-black-and-white--512.png" 
                            alt="logo_del_usuario"/>
                        <div className="info-cart"></div>
                    </div>

                </div>
            )
    }
    else{
        return(
            <div>
                <div className="display-menu-perfil">

                    <div className="link-nav-user" onClick={()=>removeToken()}>
                        <img className="logo-usuario"
                            src="https://giftcards.woolworths.com.au/_ui/responsive/common/images/User_icon_white.png"
                            alt="logo_del_usuario"/>                    
                    </div>



                    <div className="link-nav-cart" onClick={()=>console.log('carrito :)')}>
                        <  img className="logo-cart"
                            src="https://pluspng.com/img-png/shop-png-black-and-white--512.png" 
                            alt="logo_del_usuario"/>
                        <div className="info-cart"></div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>(
    {
        user : state.userReducer.user
    }
)

export default connect(mapStateToProps)(PrivateMenu)
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    const modal_info_user_m=useRef(null)

    useEffect(() => {
    
        const idUsuario = localStorage.getItem('idUsuario')

        store.dispatch(getuser(idUsuario))

        console.log(idUsuario)
    
    },[])

    if(user)
    {
        return (
                <div className="main-perfil-container">

                    <div className="display-menu-perfil">
                        <div className="link-nav-user" onClick={()=>mostrar_modal(modal_info_user.current)}>
                            <img className="logo-usuario-logueado"
                                src={user.imagenUrl}
                                alt="logo_del_usuario"/>                    
                        </div>
                    </div>

                    <div className="display-menu-perfil-m">
                        <div className="link-nav-user" onClick={()=>mostrar_modal(modal_info_user_m.current)}>
                            <img className="logo-usuario-logueado" 
                            src={user.imagenUrl} 
                            alt="logo_del_usuario"/>
                        </div>
                    </div>
                    
                    <div className="modal-info-user" ref={modal_info_user}>                        
                        <div className="box-modal-info-user">

                            <div className="close-modal-login" onClick={()=>close_modal(modal_info_user.current)}>
                                <img className="logo-close-modal-login"
                                    src="https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png" 
                                    alt="close-modal"/>
                            </div>

                            <div className="container-name-info-user">
                                <label className="name-info-user">{user.nombres +' ' +user.apellidos}</label><br/>
                                <label className="email-info-user">{user.email}</label>
                            </div>

                            <div className="border-title-modal-login">
                            </div>

                            <div className="container-link-info-user">
                                <img className="link-info-user-logo" 
                                    src="https://image.flaticon.com/icons/png/512/44/44948.png" 
                                    alt="logo_usuario"/>
                                <Link className="link-info-user" to="/perfil">Mi Perfil
                                </Link>
                            </div>

                            <div className="container-link-info-user">
                                <img className="link-info-user-logo" 
                                        src="https://images.vexels.com/media/users/3/137350/isolated/preview/112b6e64f0495173368ef04050aeb3d0-logo-corazon-rosa-by-vexels.png" 
                                        alt="favoritos_usuario"/>
                                <Link className="link-info-user" to="/mis-favoritos">Mis Favoritos
                                </Link>
                            </div>

                            <div className="container-link-info-user">
                                <img className="link-info-user-logo" 
                                        src="https://www.logolynx.com/images/logolynx/cd/cd39970a881e12cc55244b5ab19d62c1.png" 
                                        alt="compras_usuario"/>
                                <Link className="link-info-user" to="/mis-compras">Mis Compras
                                </Link>
                            </div>
                            
                            <div className="border-title-modal-login">
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

                    <div className="modal-info-user-m" ref={modal_info_user_m}>

                        <div className="close-modal-login" onClick={()=>close_modal(modal_info_user_m.current)}>
                                <img className="logo-close-modal-login"
                                    src="https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png" 
                                    alt="close-modal"/>
                        </div>

                        <div className="container-name-info-user-m">
                                <label className="name-info-user-m">{user.nombres +' ' +user.apellidos}</label>
                                <label className="email-info-user-m">{user.email}</label>
                        </div>

                        <div className="border-title-modal-login"></div>

                        <div className="container-link-info-user-m">
                                <img className="link-info-user-logo-m" 
                                    src="https://image.flaticon.com/icons/png/512/44/44948.png" 
                                    alt="logo_usuario"/>
                                <Link className="link-info-user-m" to="/perfil">Mi Perfil
                                </Link>
                        </div>

                        <div className="container-link-info-user-m">
                                <img className="link-info-user-logo-m" 
                                        src="https://images.vexels.com/media/users/3/137350/isolated/preview/112b6e64f0495173368ef04050aeb3d0-logo-corazon-rosa-by-vexels.png" 
                                        alt="favoritos_usuario"/>
                                <Link className="link-info-user-m" to="/mis-favoritos">Mis Favoritos
                                </Link>
                        </div>

                        <div className="container-link-info-user-m">
                                <img className="link-info-user-logo-m" 
                                        src="https://www.logolynx.com/images/logolynx/cd/cd39970a881e12cc55244b5ab19d62c1.png" 
                                        alt="compras_usuario"/>
                                <Link className="link-info-user-m" to="/mis-compras">Mis Compras
                                </Link>
                        </div>
                            
                            <div className="border-title-modal-login">
                            </div>

                        <div className="cerrar-sesion-container" onClick={()=>removeToken()}>
                                <img 
                                className="logo-cerrar-sesion"
                                src="https://i.dlpng.com/static/png/6971560_preview.png" 
                                alt="close_session"/>
                                <span className="cerrar-sesion">Cerrar Sesion</span>
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
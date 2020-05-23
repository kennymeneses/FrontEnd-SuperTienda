import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { estilo_modal, close_modal } from './scripts'

//solo cambiara el logo de usuario si no es usuario mas mostrar un modal si se desear loguear
const PublicMenu = () =>{

const modal_login=useRef(null)

    return (
        <div>
            <div className="display-menu-perfil">
                <div className="link-nav-user" onClick={()=>estilo_modal(modal_login.current)}>
                    <img className="logo-usuario"
                         src="https://giftcards.woolworths.com.au/_ui/responsive/common/images/User_icon_white.png" 
                         alt="logo_del_usuario"/>
                    <div className="info-acceso">Ingresar ▼</div>
                </div>
            </div>

                <div className="modal-login" ref={modal_login}>
                    <div className="background-modal-login">

                    </div>
                    <div className="box-modal-login">
                        <div className="close-modal-login" onClick={()=>close_modal(modal_login.current)}>
                            <img className="logo-close-modal-login"
                                src="https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png" 
                                alt="close-modal"/>
                        </div>
                    </div>
                </div>



            <div className="display-menu-perfil-m">
                <div className="link-nav-user">
                    <img className="logo-usuario"
                         src="https://giftcards.woolworths.com.au/_ui/responsive/common/images/User_icon_white.png" 
                         alt="logo_del_usuario"/>                    
                </div>
            </div>
        </div>
    )

}

export default PublicMenu
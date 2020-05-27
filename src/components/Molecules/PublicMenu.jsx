import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mostrar_modal, close_modal } from './scripts'

//solo cambiara el logo de usuario si no es usuario mas mostrar un modal si se desear loguear
const PublicMenu = () =>{

const modal_login=useRef(null)

const modal_login_m=useRef(null)

const aviso_error = useRef(null)

const [error, setError] = useState("");

    const authentication = e =>{
        e.preventDefault()
        const form = e.target

        const data = {
            "correo":form.email.value,
            "contrasena":form.password.value
        }
        
        const miinit={
            method:'POST',                    
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(data)
        }

        const url = 'https://localhost:44369/api/login';

        fetch(url,miinit).then(r=>{console.log(r); return r.json()}).then(r=>{if(r.apiEstado == "error"){setError(r.apiMensaje);aviso_error.current.style.display="flex"}
                else{console.log(r);aviso_error.current.style.display="none"; localStorage.setItem('token', r.token);localStorage.setItem('idUsuario',r.id);setError('');window.location="/";console.log('Se inicio sesion!')}})
    }

    useEffect(() => {        
    },[])

    return (
        <div className="main-perfil-container">

            <div className="display-menu-perfil">
                <div className="link-nav-user" onClick={()=>mostrar_modal(modal_login.current)}>
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

                        <div className="Title-modal-login">
                             Inicio de sesión   
                        </div>

                        <div className="border-title-modal-login">

                        </div>

                        <form className="Formulario" onSubmit={authentication.bind()}>

                            <div className="container-email-model-login">
                                <input className="email-model-login" type="email" name="email" placeholder="Ingrese su e-mail"/>
                            </div>
                        
                            <div className="container-password-model-login">
                                <input className="password-model-login" type="password" name="password" placeholder="Ingrese su contraseña"/>
                            </div>

                            <div className="container-submit-model-login">
                                <input type="submit" className="btnsend-model-login" value="INICIAR SESION"/>
                            </div>

                            <div className="container-error-model-login" ref={aviso_error}>
                                <span className="mensaje-error-login">{error}</span>
                            </div>

                            <div className="container-registro-modal-login-m">
                                <span className="aviso-registro-modal-login-m">¿No tienes una cuenta?</span><br/>
                                <Link className="registro-modal-login-m" to="/registro">Regístrate</Link>
                            </div>

                        </form>

                    </div>
                </div>



            <div className="display-menu-perfil-m">
                <div className="link-nav-user" onClick={()=>mostrar_modal(modal_login_m.current)}>
                    <img className="logo-usuario"
                         src="https://giftcards.woolworths.com.au/_ui/responsive/common/images/User_icon_white.png" 
                         alt="logo_del_usuario"/>                    
                </div>
            </div>

                

                <div className="box-modal-login-m" ref={modal_login_m}>
                    
                    <div className="close-modal-login" onClick={()=>close_modal(modal_login_m.current)}>
                        <img className="logo-close-modal-login"
                            src="https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png" 
                            alt="close-modal"/>
                    </div>

                    <div className="container-logo-modal-login-m">
                        <img 
                        className="logo-modal-login-m"
                        src="https://maquillaje.com/es-mx/wp-content/uploads/sites/2/2019/04/Walmart-Logo-PNG-Transparent.png" 
                        alt=""/>
                    </div>

                    <div className="Title-modal-login-m">
                             Inicio de sesión   
                    </div>

                    <div className="border-title-modal-login-m">
                    </div>

                    <form className="Formulario" onSubmit={authentication.bind()}>

                            <div className="container-email-model-login">
                                <input className="email-model-login" type="email" name="email" placeholder="Ingrese su e-mail"/>
                            </div>
                        
                            <div className="container-password-model-login">
                                <input className="password-model-login" type="password" name="password" placeholder="Ingrese su contraseña"/>
                            </div>

                            <div className="container-submit-model-login">
                                <input type="submit" className="btnsend-model-login" value="INICIAR SESION"/>
                            </div>

                            <div className="container-error-model-login" ref={aviso_error}>
                                <span className="mensaje-error-login">{error}</span>
                            </div>

                    </form>

                    <div className="container-registro-modal-login-m">
                        <span className="aviso-registro-modal-login-m">¿No tienes una cuenta?</span><br/>
                        <Link className="registro-modal-login-m" to="/registro">Regístrate</Link>
                    </div>

                </div>

                
        </div>
    )

}

export default PublicMenu
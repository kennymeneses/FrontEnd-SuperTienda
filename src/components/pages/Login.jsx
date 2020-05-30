import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'

const Login =()=>{


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

        fetch(url,miinit).then(r=>{console.log(r); return r.json()}).then(r=>{if(r.apiEstado === "error"){setError(r.apiMensaje);aviso_error.current.style.display="flex"}
                else{console.log(r);aviso_error.current.style.display="none"; localStorage.setItem('token', r.token);localStorage.setItem('idUsuario',r.id);setError('');window.location="/";console.log('Se inicio sesion!')}})
    }


    return(
                <div className="page-content-login">

                        <div className="Title-modal-login-p">
                             Inicio de sesión   
                        </div>

                        <div className="border-title-modal-login">

                        </div>

                        <form className="Formulario" onSubmit={authentication.bind()}>

                            <div className="container-email-model-login">
                                <input className="email-model-login-p" type="email" name="email" placeholder="Ingrese su e-mail"/>
                            </div>
                        
                            <div className="container-password-model-login">
                                <input className="password-model-login-p" type="password" name="password" placeholder="Ingrese su contraseña"/>
                            </div>

                            <div className="container-submit-model-login">
                                <input type="submit" className="btnsend-model-login-p" value="INICIAR SESION"/>
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

    )
}

export default (Login)
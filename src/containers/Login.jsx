import React, { useState } from 'react'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'
const Login = () =>{
    const [form, setValues] = useState({
        email:'',
        
    })

    const handleInput = e=>{
        setValues({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(form);
    }
    return(
        <section className='login'>
            <section className='login__container'>
            <h2>Inicia sesión</h2>
            <form className='login__container--form' onSubmit={handleSubmit}>
                <input className='input' 
                        name = 'email'
                        type='text' 
                        placeholder='Correo'
                        onChange={handleInput} />
                <input className='input' 
                        name='password'
                        type='password' 
                        placeholder='Contraseña' 
                        onChange={handleInput}/>
                <button className='button'>Iniciar sesión</button>
                <div className='login__container--remember-me'>
                    <label>
                        <input type='checkbox' id='cbox1' value='first_checkbox' />
                        Recuérdame
                    </label>
                    <a href='/'>Olvidé mi contraseña</a>
                </div>
            </form>
            <section className='login__container--social-media'>
                <div>
                    <img src={googleIcon}/> Inicia sesión con Google
                </div>
                <div>
                    <img src={twitterIcon} /> Inicia sesión con Twitter
                </div>
            </section>
            <p className='login__container--register'>
                No tienes ninguna cuenta 
                <Link className="ml-2" to="register">
                Regístrate
                </Link>
                {/* <a href=''></a> */}
            </p>
        </section>
    </section>
)};

export default Login;



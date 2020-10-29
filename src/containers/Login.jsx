import React from 'react';

// img
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

// styles
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia Sesión</h2>
      <form className='login__container--form' action=''>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>
          <a href='../index.html'>Iniciar sesión</a>
        </button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='checkbox' />
            Recuérdame
          </label>
          <a href='#'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='' />
          <a href=''>Inicia sesión con Google</a>
        </div>
        <div>
          <img src={twitterIcon} alt='' />
          <a href=''>Inicia sesión con Twitter</a>
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta{' '}
        <a href='../register/register.html'>Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;

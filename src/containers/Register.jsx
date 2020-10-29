import React from 'react';

// styles
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input type='text' placeholder='Nombre' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Contraseña' />
      </form>
      <button className='button'>Registrarme</button>
      <a href='../login/login.html'>Iniciar sesión</a>
    </section>
  </section>
);

export default Register;

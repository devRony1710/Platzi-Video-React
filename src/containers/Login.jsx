import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';

//Actions
import { loginRequest } from '../actions';

// img
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

// styles
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia Sesión</h2>
        <form
          className='login__container--form'
          action=''
          onSubmit={handleSubmit}
        >
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>
            <a href='/'>Iniciar sesión</a>
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
          No tienes ninguna cuenta <Link to='/Register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

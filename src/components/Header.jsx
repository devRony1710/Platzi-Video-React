import React from 'react';
import { Link } from 'react-router-dom';

//PropTypes
import propTypes from 'prop-types';

//redux
import { connect } from 'react-redux';

//actions
import { logoutRequest } from '../actions';

// Styles
import '../assets/styles/components/Header.scss';

// img
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png';

// gravatar
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to='/'>{user.name}</Link>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <Link to='#logout' onClick={handleLogout}>
                {' '}
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/Login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: propTypes.object.isRequired,
  logoutRequest: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

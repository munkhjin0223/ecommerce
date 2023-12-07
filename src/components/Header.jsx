import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ApplicationContext } from './Layout';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { basket } = useContext(ApplicationContext);
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <header className='header-area header-sticky'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <nav className='main-nav'>
              {/* ***** Logo Start ***** */}
              <Link to='/' className='logo'>
                <img src='/images/logo.png' />
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className='nav'>
                <li className='scroll-to-section'>
                  <Link to='/' className='active'>
                    Нүүр
                  </Link>
                </li>
                {isAuthenticated ? (
                  <li>
                    Hello {user.name}{' '}
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log out
                    </button>
                  </li>
                ) : (
                  <li className='scroll-to-section'>
                    <Link className='active' onClick={() => loginWithRedirect()}>
                      Нэвтрэх
                    </Link>
                  </li>
                )}
                <li className='scroll-to-section'>
                  <Link to='/shopping-card' className='active'>
                    Сагс: {basket.length}
                  </Link>
                </li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

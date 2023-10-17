import { Link } from 'react-router-dom';

export default function Header() {
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
                <li className='scroll-to-section'>
                  <Link to='/login' className='active'>
                    Нэвтрэх
                  </Link>
                </li>
                <li className='scroll-to-section'>
                  <Link to='/register' className='active'>
                    Бүртгүүлэх
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

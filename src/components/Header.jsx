export default function Header() {
  return (
    <header className='header-area header-sticky'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <nav className='main-nav'>
              {/* ***** Logo Start ***** */}
              <a href='/' className='logo'>
                <img src='/images/logo.png' />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className='nav'>
                <li className='scroll-to-section'>
                  <a className='active'>Нүүр</a>
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

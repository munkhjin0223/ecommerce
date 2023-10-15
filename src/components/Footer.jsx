import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='first-item'>
              <div className='logo'>
                <img src='/images/white-logo.png' alt='hexashop ecommerce templatemo' />
              </div>
              <ul>
                <li>
                  <a href='#'>16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a>
                </li>
                <li>
                  <a href='#'>hexashop@company.com</a>
                </li>
                <li>
                  <a href='#'>010-020-0340</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3'>
            <h4>Хэрэгцээт линкүүд</h4>
            <ul>
              <li>
                <Link to='/'>Нүүр</Link>
              </li>
              <li>
                <Link to='/about'>Бидний тухай</Link>
              </li>
              <li>
                <a href='#'>Help</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-12'>
            <div className='under-footer'>
              <p>
                Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                <br />
                Design:{' '}
                <a href='https://templatemo.com' target='_parent' title='free css templates'>
                  TemplateMo
                </a>
              </p>
              <ul>
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-behance' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

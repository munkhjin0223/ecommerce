export default function About() {
  return (
    <>
      <div className='page-heading about-page-heading' id='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner-content'>
                <h2>About Our Company</h2>
                <span>Awesome, clean &amp; creative HTML5 Template</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='left-image'>
                <img src='/images/about-left-image.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='right-content'>
                <h4>Бидний тухай &amp; ур чадвар</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut
                  labore.
                </span>
                <div className='quote'>
                  <i className='fa fa-quote-left' />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut
                    labore.
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut
                  labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip.
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
      </div>
    </>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-hexashop.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';

import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

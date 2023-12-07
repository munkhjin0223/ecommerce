import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-hexashop.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';

import Footer from './Footer';
import Header from './Header';
import { createContext, useState } from 'react';

export const ApplicationContext = createContext({ basket: [], setBasket: () => {} });

export default function Layout(props) {
  const { children } = props;
  const [basket, setBasket] = useState([]);

  return (
    <>
      <ApplicationContext.Provider value={{ basket, setBasket }}>
        <Header />
        {children}
        <Footer />
      </ApplicationContext.Provider>
    </>
  );
}

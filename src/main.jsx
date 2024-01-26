import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';
import ShoppingCard from './pages/shopping-card.jsx';

import ConcurrentDef from './pages/concurrent/concurrent-def.jsx';
import ConcurrentTrans from './pages/concurrent/concurrent-trans.jsx';
import BeforeConcurrent from './pages/concurrent/before-concurrent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-lic54s15c27g07pc.us.auth0.com'
      clientId='SDEYcrcRrbTIbxnbZZFJrTzpBUsbb6vh'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/shopping-card' element={<ShoppingCard />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='*' element={<h1>404 - Not found</h1>} />
          </Routes>
        </Layout>
        <Routes>
          <Route path='/concurrent-trans' element={<ConcurrentTrans />} />
          <Route path='/concurrent-def' element={<ConcurrentDef />} />
          <Route path='/before-concurrent' element={<BeforeConcurrent />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

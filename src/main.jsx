import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';
import Login from './pages/login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h1>404 - Not found</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

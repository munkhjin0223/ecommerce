import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<h1>404 - Not found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

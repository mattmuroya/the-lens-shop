import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/the-lens-shop'>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={
            <main className="error">
              <div className="error-wrapper">
                <p>There's nothing here!</p>
                <p><a href="/">Go Home</a></p>
              </div>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

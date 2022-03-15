import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import NothingHerePage from './components/NothingHerePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NothingHerePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

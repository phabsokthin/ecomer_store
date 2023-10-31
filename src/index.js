import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SideBarProvider from './components/contexts/SidebarContext';
import CartProvider from './components/contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>

  </SideBarProvider>

);



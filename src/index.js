import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './contexts/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/react-test" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>,
);

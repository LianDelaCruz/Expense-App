import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import Header from './components/header/header';
import Footer from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>
); //strictmode is used to handle errors



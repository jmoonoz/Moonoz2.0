import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import '../src/style/style.scss';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
   
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

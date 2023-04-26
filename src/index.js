import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Error from './pages/Error';
import CreateCompany from './components/Company/Card/CreateCompany';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import CompanyPanel from './components/Company/Page/CompanyPanel';
import JobPosting from './components/Job/Card/JobPostingCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

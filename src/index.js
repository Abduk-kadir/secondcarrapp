import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Ass7Task1Main from './components/ass7Task1Main';
import PersonMain from './components/personMain';
import { BrowserRouter } from 'react-router-dom';
import StudentMain from './components/studentMain';
import ClassCompMain from './components/classCompMain';
import CompanyMain from './components/companyMain';
import Piza from './components/piza';
import MainPizza from './components/mainPizza';
import MatchMainComp from './components/matchMainComp';
import CustomersMain from './components/customersMain';
import CarMain from './components/carMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <BrowserRouter>
    <CarMain/>
    </BrowserRouter>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

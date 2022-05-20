import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import FavoriteColor from './hex';
import FavoriteColor2 from './hex2';
import Car from './hex3mult';
import Car2 from './hex4mult';
import FormEx from './formex';
import FavoriteColor from './FavoriteColor';
//<App/> example with class component constructor
//<FavoriteColor/> example hook useState jsut read from
//<FavoriteColor2/> example hook useState read from and update with button 
//<Car/> example hook for multiple states to track individual values
ReactDOM.render(

    <FavoriteColor />
 ,
  document.getElementById('root')
);


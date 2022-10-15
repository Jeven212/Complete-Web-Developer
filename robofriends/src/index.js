import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "tachyons";
import { robots } from './robots';
import { CardList } from './Card';
import SearchBox from './SearchBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>

      <div className='center'>
        <h1>Robofriends</h1>
      </div>

      <div className="center">
        <SearchBox />
      </div>

      <CardList robots={ robots }/>
      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

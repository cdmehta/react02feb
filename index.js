
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Data from './Data.jsx';
// import Mydata from './Mydata'
import Desc from './Desc'
import Menu from './Menu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Desc />
   <Desc />
   <Desc />
   <Desc val="blue" />
   <Menu item="About Us"/>
   <Menu item="Contact Us"/>
   
   </>
    // <App />
  
);


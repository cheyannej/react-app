import React from 'react'; //library that allows to build react comp
import ReactDOM from 'react-dom'; //library allows to place comp in context of DOM
import App from './App';

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('root')
);

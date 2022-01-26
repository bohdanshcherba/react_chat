import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';

const URL = 'https://edikdolynskyi.github.io/react_sources/messages.json'

ReactDOM.render(
  <React.StrictMode>
    <Chat url={URL}/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import $ from 'jquery';
import {IPAddressContainer} from './components/IPAddressContainer.jsx';

$('body').append('<div id="container"></div>')
let dest = document.querySelector('#container')

ReactDOM.render(
  <div>
    <IPAddressContainer url='http://icanhazip.com'/>
  </div>,
  dest
)

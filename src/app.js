import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import $ from 'jquery';
import {IPAddressContainer} from './components/IPAddressContainer.jsx';

$('body').append('<div id="container"></div>')
$('head').append(`<script
			  src="http://code.jquery.com/jquery-3.3.1.min.js"
			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			  crossorigin="anonymous"></script>`)
let dest = document.querySelector('#container')

ReactDOM.render(
  <div>
    <IPAddressContainer/>
  </div>,
  dest
)

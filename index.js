import React from 'react';
import App from './modules/App';
import $ from 'jquery';

$(document).ready(function () {
    React.render(<App/>, document.getElementById('app'));
});


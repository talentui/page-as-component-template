import React from 'react';
import {render} from 'react-dom';
import Component, {loadProperties} from '../src/index';

// loadProperties(function(Component){
//     render(<Component />, document.getElementById('bsMain'))
//     console.dir(Component)
// })
render(<Component />, document.getElementById('bsMain'))

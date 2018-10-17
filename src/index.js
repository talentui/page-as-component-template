import React, {Component} from 'react';
// import './style.css'

import {render} from 'react-dom';

export default class ThunderPage extends Component {
    constructor(){
        super(...arguments);
    }

    static displayName = process.env.className || 'ThunderPage'


    render(){
        return <div>ThunderPage</div>
    }
}

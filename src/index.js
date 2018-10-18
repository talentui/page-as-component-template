import React, {Component} from 'react';
import './style.less'

export default class ThunderComponent extends Component {
    constructor(){
        super(...arguments);
    }

    static displayName = process.env.className || 'ThunderPage'


    render(){
        return <div>ThunderComponent</div>
    }
}

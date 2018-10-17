import React, {Component} from 'react';
import './style.less'

if(process.env.NODE_ENV==='production'){
    console.log(1);
}

const a = __HEHE

export default class ThunderPage extends Component {
    constructor(){
        super(...arguments);
    }

    static displayName = process.env.className || 'ThunderPage'


    render(){
        return <div>ThunderPage</div>
    }
}

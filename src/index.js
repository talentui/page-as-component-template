import React from 'react';
import Workspace, { TubState, GridViewer } from '@beisen/page-builder'
import pageSettings from './data/pageSetting.json';
import * as allComponent from './components';

export default class AppPageComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tubState: TubState.create(pageSettings)
        }
    }

    getComponentClass = (data) => {
        let {cType} = data;
        return allComponent[cType]
    }

    handleEdit = (tubState) => {
        this.setState({
            tubState
        })
    }

    render() {
        console.log(this.state.tubState.toJS());
        return <GridViewer component={{}} onChange={this.handleEdit} availableComponents={[]} getComponentClass={this.getComponentClass} tubState={this.state.tubState} />
    }
}
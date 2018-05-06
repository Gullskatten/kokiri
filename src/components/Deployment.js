import React, {Component} from 'react';

class Deployment extends Component {

    render() {
        const {deployment} = this.props;
        return <div>{deployment.application.name}</div> 
    }

}

export default Deployment;
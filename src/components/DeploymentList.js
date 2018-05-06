import React, { Component } from "react";
import styled from "styled-components";
import Deployment from "./Deployment";

const DeploymentListWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;
const DeploymentPadder = styled.div`
  margin: 10px 0;
`;

class DeploymentList extends Component {
  renderDeployments = () => {
    const { deployments } = this.props;

    console.log(deployments);

    return deployments.map((deployment, idx) => {
      return <DeploymentPadder><Deployment key={idx} deployment={deployment} /></DeploymentPadder>;
    });
  };

  render() {
    const { deployments } = this.props;
    return (
      <div>
        {deployments && deployments.length ? (
          <DeploymentListWrapper>
            {this.renderDeployments()}
          </DeploymentListWrapper>
        ) : (
          <span>No deployments found.</span>
        )}
      </div>
    );
  }
}

export default DeploymentList;

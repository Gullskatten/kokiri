import React, { Component } from "react";
import styled from "styled-components";
import Deployment from "./Deployment";

const DeploymentListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class DeploymentList extends Component {
  renderDeployments = () => {
    const { deployments } = this.props;

    console.log(deployments);

    return deployments.map((deployment, idx) => {
      return <Deployment key={idx} deployment={deployment} />;
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

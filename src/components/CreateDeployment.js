import React, { Component } from "react";
import { StyledModal } from "./StyledModal";
import { FullSizedContainer } from "./Containers";
import { CreateDeploymentName } from "./CreateDeploymentName";

class CreateDeployment extends Component {
  state = {
    newDeployment: {},
    isFlowCancelled: false
  };

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  selectName = name => {
    let { newDeployment } = this.state;

    newDeployment.name = name;

    this.setState({
      newDeployment: newDeployment
    });
  };

  render() {
    const { newDeployment, isFlowCancelled } = this.state;

    return (
      <StyledModal title="New deployment routine" shouldClose={ isFlowCancelled }>
        {() => (
          <FullSizedContainer>
            <CreateDeploymentName
              onConfirm={deploymentName => {
                this.selectName(deploymentName);
              }}
              onCancel={() => {this.setState({ isFlowCancelled: true})}}
            />
            <span>{newDeployment.name}</span>
          </FullSizedContainer>
        )}
      </StyledModal>
    );
  }
}

export default CreateDeployment;

import React, { Component } from "react";

import { StyledInput } from "./StyledInput";
import {
  StyledButton,
  ButtonGroup,
  StyledButtonGroupWrapper
} from "./StyledButton";

export class CreateDeploymentName extends Component {
  state = {
    selectedName: ""
  };

  onRegularInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  forwardName = () => {

  };

  render() {
    const { selectedName } = this.state;
    const { onConfirm, onCancel } = this.props;
    return (
      <div>
        <StyledInput
          label="Deployment name"
          placeholder="Give the deployment a name.."
          titleDivider={true}
          autoFocus={true}
          type="text"
          name="selectedName"
          value={selectedName}
          onChange={this.onRegularInputChange}
        />
        <StyledButtonGroupWrapper>
          <ButtonGroup>
            <StyledButton title="Cancel" cancel fullWidth onClick={() => onCancel()} />
            <StyledButton
              title="Next"
              success
              fullWidth
              icon="arrow-right"
              onClick={() => onConfirm(selectedName)}
            />
          </ButtonGroup>
        </StyledButtonGroupWrapper>
      </div>
    );
  }
}

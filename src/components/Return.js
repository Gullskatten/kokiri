import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import { history } from "./App";

const ReturnWrapper = styled.div`
  margin: 10px;
  cursor: pointer;
`;

const StyledReturn = styled.div`
  display: inline-flex;
  color: #fff;
  border-radius: 20px;
  background: ${props => props.theme.darkest};
  padding: 0.3rem 1rem;

  span {
    font-weight: 300;
    &:first-child {
      margin-right: 3px;
    }
  }
`;

class Return extends Component {
  render() {
    const { label } = this.props;

    return (
      <ReturnWrapper onClick={() => history.goBack()}>
        <StyledReturn>
          <span>
            <FontAwesome name="arrow-left" />
          </span>
          <span>{label || "Go back"}</span>
        </StyledReturn>
      </ReturnWrapper>
    );
  }
}

export default Return;

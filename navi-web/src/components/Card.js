import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

export default class Card extends Component {
  render() {

    const {children} = this.props;
    return (
      <CardWrapper>
        {children()}
      </CardWrapper>
    );
  }
}

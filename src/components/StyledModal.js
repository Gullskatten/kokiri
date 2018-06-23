import React, { Component } from "react";
import styled from "styled-components";
import { expandable } from "../utils/CommonAnimations";
import { TitleLarge } from "./StyledTitles";
import { StyledMessage } from "./StyledMessages";
import { history } from "./App";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: absolute;
  animation: ${expandable} 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  z-index: 10;

  > div {
    padding: 0 20px;
  }
  top: 0;
`;

const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.light};
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
`;

export class StyledModal extends Component {
  state = {
    isOpen: true
  };

  render() {
    const { children, title, shouldClose } = this.props;

    if (shouldClose) {
      history.goBack();
      return null;
    }

    return (
      <ModalWrapper>
        <ModalTopWrapper>
          <TitleLarge smallScreenAware white>
            {title}
          </TitleLarge>
          <StyledMessage
            onClick={() => history.goBack()}
            clickable
            tinyUnderlined
          >
            Close
          </StyledMessage>
        </ModalTopWrapper>
        {children()}
      </ModalWrapper>
    );
  }
}

import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";

/* Content loader should 'indent' itself (using margin). */
const ContentLoaderWrapper = styled.div`
  display: flex;
  border-left: 5px solid ${props => props.theme.normal};
  min-height: 30px;
  align-items: center;
  margin-left: 10px;
`;

const ContentLoaderText = styled.span`
  font-weight: 300;

  span {
    margin-left: 5px;
  }
`;

const ContentLoader = () => {
  return (
    <ContentLoaderWrapper>
      <ContentLoaderText>
        <StyledMessage normal>
          <FontAwesome name="spinner" spin /> Loading..
        </StyledMessage>
      </ContentLoaderText>
    </ContentLoaderWrapper>
  );
};

export default ContentLoader;

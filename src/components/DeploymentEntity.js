import React from "react";
import styled from "styled-components";
import { CircularIcon } from "./Common";
import { TitleLarge } from "./StyledTitles";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";

const DeploymentEntityHeader = styled.div`
  display: inline-flex;
  align-items: center;

  @media all and (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DeploymentEntityMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media all and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const DeploymentEntity = ({icon, title, description}) => {
  return (
    <DeploymentEntityHeader>
      <CircularIcon small>
        <StyledMessage dark>
          <FontAwesome name={icon || "question"} size="2x" />
        </StyledMessage>
      </CircularIcon>
      <DeploymentEntityMeta>
        <TitleLarge tight dark smallScreenAware>
          {title}
        </TitleLarge>
        <StyledMessage normal tiny>
          {description}
        </StyledMessage>
      </DeploymentEntityMeta>
    </DeploymentEntityHeader>
  );
};

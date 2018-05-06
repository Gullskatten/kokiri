import React, { Component } from "react";
import styled, { css } from "styled-components";
import { CircularIcon } from "./Common";
import { TitleLarge } from "./StyledTitles";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";
import moment from "moment";

const DeploymentWrapper = styled.div`
  display: block;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);

  ${props =>
    props.completed &&
    css`
      border-left: 7px solid #3fb6a8;
    `};

  ${props =>
    props.failed &&
    css`
      border-left: 7px solid #c9283e;
    `};

  ${props =>
    props.inProgress &&
    css`
      border-left: 7px solid #f4cda5;
    `};
  ${props =>
    props.notStarted &&
    css`
      border-left: 7px solid #eee;
    `};
`;

const DeploymentContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 700px) {
    display: block;
    margin: 0 auto;
  }
`;

const DeploymentMetaWrapper = styled.div`
  display: flex;
  align-items: center;
  
  ${props =>
    props.top &&
    css`
      margin-bottom: 1rem;
    `};

  ${props =>
    props.bottom &&
    css`
      margin-top: 1rem;
    `};
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

const DeploymentEntityHeader = styled.div`
  display: inline-flex;
  align-items: center;

  @media all and (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DeploymentArrowIndicator = styled.div`
  margin: 0 1.3rem;

  @media all and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

class Deployment extends Component {
  render() {
    const { deployment } = this.props;
    return (
      <DeploymentWrapper
        completed={deployment.status.key === "COMPLETED"}
        inProgress={deployment.status.key === "IN_PROGRESS"}
        failed={deployment.status.key === "FAILED"}
        notStarted={deployment.status.key === "NOT_STARTED"}
      >
        <DeploymentMetaWrapper top>
          <StyledMessage boxed dark><FontAwesome name={deployment.status.icon} spin={deployment.status.key === "IN_PROGRESS"}/></StyledMessage>
          <StyledMessage darkest tiny>
            Started by{" "}
            <StyledMessage light tinyUnderlined clickable>
              {deployment.createdBy}
            </StyledMessage>{" "}
            ({moment(deployment.createdAt).calendar()})
          </StyledMessage>
        </DeploymentMetaWrapper>
        <DeploymentContentWrapper>
          <DeploymentEntityHeader>
            <CircularIcon small>
              <StyledMessage dark>
                <FontAwesome
                  name={deployment.application.icon || "question"}
                  size="2x"
                />
              </StyledMessage>
            </CircularIcon>
            <DeploymentEntityMeta>
              <TitleLarge tight dark smallScreenAware>
                {deployment.application.name}
              </TitleLarge>
              <StyledMessage normal tiny>{deployment.version.name}</StyledMessage>
            </DeploymentEntityMeta>
          </DeploymentEntityHeader>
          <DeploymentArrowIndicator>
            <StyledMessage dark hideOnSmallScreen>
              <FontAwesome name="chevron-right" />
            </StyledMessage>
            <StyledMessage dark showOnSmallScreen>
              <FontAwesome name="arrow-down" />
            </StyledMessage>
          </DeploymentArrowIndicator>
          <DeploymentEntityHeader>
            <CircularIcon small>
              <StyledMessage dark>
                <FontAwesome
                  name={deployment.environment.icon || "question"}
                  size="2x"
                />
              </StyledMessage>
            </CircularIcon>
            <DeploymentEntityMeta>
              <TitleLarge tight dark smallScreenAware>
                {deployment.environment.name}
              </TitleLarge>
              <StyledMessage normal tiny>
                {deployment.environment.description}
              </StyledMessage>
            </DeploymentEntityMeta>
          </DeploymentEntityHeader>
        </DeploymentContentWrapper>
        <DeploymentMetaWrapper bottom>
          <StyledMessage darkest tiny>
            View the{" "}
            <StyledMessage light tinyUnderlined clickable>
              logs.
            </StyledMessage>
          </StyledMessage>
        </DeploymentMetaWrapper>
      </DeploymentWrapper>
    );
  }
}

export default Deployment;

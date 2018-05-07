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

  @media all and (max-width: 700px) {
    display: block;
    margin: 0 auto;
  }

  ${props =>
    props.top &&
    css`
      margin-bottom: 1rem;
    `};

  ${props =>
    props.bottom &&
    css`
      margin-top: 2rem;
      justify-content: space-between;
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

const DeploymentDetailsOption = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

const DeploymentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeploymentDetailsInfo = styled.div`
  margin: 10px;
`;

const DeploymentApplicationWrapper = styled.div`
  margin: 10px;
`;

const Empty = styled.div``;

class Deployment extends Component {
  state = {
    isDetailsOpen: false
  };

  toggleDetails = () => {
    const { isDetailsOpen } = this.state;
    this.setState({ isDetailsOpen: !isDetailsOpen });
  };

  renderApplicationsDeployed = () => {
    const { deployment } = this.props;
    if (!deployment.system || !deployment.system.applications) {
      return <div>No applications..</div>;
    }
    return deployment.system.applications.map((app, idx) => {
      return (
        <DeploymentApplicationWrapper>
        <DeploymentEntityHeader key={idx}>
          <CircularIcon small>
            <StyledMessage dark>
              <FontAwesome name={app.icon || "question"} size="2x" />
            </StyledMessage>
          </CircularIcon>
          <DeploymentEntityMeta>
            <TitleLarge tight dark smallScreenAware>
              {app.name}
            </TitleLarge>
            <StyledMessage normal tiny>
            <StyledMessage darkest tiny>{app.type.name}</StyledMessage>{app.port ? ', running on port ' + app.port : ''} - <StyledMessage light tiny>{app.branch.name}</StyledMessage> - commit {app.branch.commit}
            </StyledMessage>
          </DeploymentEntityMeta>
        </DeploymentEntityHeader>
        </DeploymentApplicationWrapper>
      );
    });
  };

  render() {
    const { deployment } = this.props;
    const { isDetailsOpen } = this.state;
    return (
      <DeploymentWrapper
        completed={deployment.status.key === "COMPLETED"}
        inProgress={deployment.status.key === "IN_PROGRESS"}
        failed={deployment.status.key === "FAILED"}
        notStarted={deployment.status.key === "NOT_STARTED"}
      >
        <DeploymentMetaWrapper top>
          <StyledMessage boxed dark hideOnSmallScreen>
            <FontAwesome
              name={deployment.status.icon}
              spin={deployment.status.key === "IN_PROGRESS"}
            />
          </StyledMessage>
          <StyledMessage darkest tiny>
            Started by{" "}
            <StyledMessage light tinyUnderlined clickable>
              {deployment.createdBy}
            </StyledMessage>{" "}
            ({moment(deployment.createdAt).calendar()})
          </StyledMessage>
          <StyledMessage marginLeft10 dark showOnSmallScreen>
            <FontAwesome
              name={deployment.status.icon}
              spin={deployment.status.key === "IN_PROGRESS"}
            />
          </StyledMessage>
        </DeploymentMetaWrapper>
        <DeploymentContentWrapper>
          <DeploymentEntityHeader>
            <CircularIcon small>
              <StyledMessage dark>
                <FontAwesome
                  name={deployment.system.icon || "question"}
                  size="2x"
                />
              </StyledMessage>
            </CircularIcon>
            <DeploymentEntityMeta>
              <TitleLarge tight dark smallScreenAware>
                {deployment.system.name}
              </TitleLarge>
              <StyledMessage normal tiny>
                {deployment.description}
              </StyledMessage>
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
          <DeploymentDetailsOption onClick={() => this.toggleDetails()}>
            <StyledMessage normal>
              <FontAwesome
                name={isDetailsOpen ? "chevron-up" : "chevron-down"}
              />
            </StyledMessage>
          </DeploymentDetailsOption>
          <Empty />
        </DeploymentMetaWrapper>
        {isDetailsOpen && (
          <DeploymentDetailsWrapper>
            <DeploymentDetailsInfo>
              <TitleLarge normal>Deployment details</TitleLarge>
              <StyledMessage darkest>
                The system {deployment.system.name} was deployed with the following specifications.
              </StyledMessage>
            </DeploymentDetailsInfo>
            {this.renderApplicationsDeployed()}
          </DeploymentDetailsWrapper>
        )}
      </DeploymentWrapper>
    );
  }
}

export default Deployment;

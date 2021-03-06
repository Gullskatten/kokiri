import React, { Component } from "react";
import styled, { css } from "styled-components";
import { TitleLarge } from "./StyledTitles";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";
import moment from "moment";
import { DeploymentEntity } from "./DeploymentEntity";
import { CircularIcon } from "./Common";
import { Tooltip } from "react-tippy";
import Collapsible from "react-collapsible";

const DeploymentWrapper = styled.div`
  display: block;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);

  ${props =>
    props.completed &&
    css`
      border-left: 7px solid ${props => props.theme.success};
    `};

  ${props =>
    props.failed &&
    css`
      border-left: 7px solid ${props => props.theme.error};
    `};

  ${props =>
    props.inProgress &&
    css`
      border-left: 7px solid ${props => props.theme.warn};
    `};
  ${props =>
    props.notStarted &&
    css`
      border-left: 7px solid #666;
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
  transition: max-height 0.2s ease-out;
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
      const delimiter = " - ";

      const type = app.type.name
        ? app.type.name + delimiter
        : "Unknown app-type" + delimiter;
      const port = app.port ? "Running on port " + app.port + delimiter : "";
      const branch = app.branch.name ? app.branch.name + delimiter : "";
      const commit = app.branch.commit ? "Commit-id: " + app.branch.commit : "";
      const description = type + port + branch + commit;

      return (
        <DeploymentApplicationWrapper key={idx}>
          <DeploymentEntity
            title={app.name}
            description={description}
            icon={app.icon}
            status={app.deployStatus}
          />
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
          <Tooltip
            title={deployment.status.description}
            position="bottom"
            trigger="mouseenter"
          >
            <CircularIcon
              tiny
              marginRight10
              success={deployment.status.key === "COMPLETED"}
              error={deployment.status.key === "FAILED"}
              warn={deployment.status.key === "IN_PROGRESS"}
              disabled={deployment.status.key === "NOT_STARTED"}
            >
              <StyledMessage tiny>
                <FontAwesome
                  name={deployment.status.icon || "question"}
                  size="2x"
                  spin={deployment.status.key === "IN_PROGRESS"}
                />
              </StyledMessage>
            </CircularIcon>
          </Tooltip>
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
          <DeploymentEntity
            icon={deployment.system.icon}
            title={deployment.system.name}
            description={deployment.description}
          />
          <DeploymentArrowIndicator>
            <StyledMessage dark hideOnSmallScreen>
              <FontAwesome name="chevron-right" />
            </StyledMessage>
            <StyledMessage dark showOnSmallScreen>
              <FontAwesome name="arrow-down" />
            </StyledMessage>
          </DeploymentArrowIndicator>
          <DeploymentEntity
            icon={deployment.environment.icon}
            title={deployment.environment.name}
            description={deployment.environment.description}
          />
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
        <Collapsible open={isDetailsOpen}>
          <DeploymentDetailsWrapper>
            <DeploymentDetailsInfo>
              <TitleLarge normal>Deployment details</TitleLarge>
              <StyledMessage darkest>
                The system {deployment.system.name} was deployed with the
                following specifications.
              </StyledMessage>
            </DeploymentDetailsInfo>
            {this.renderApplicationsDeployed()}
          </DeploymentDetailsWrapper>
        </Collapsible>
      </DeploymentWrapper>
    );
  }
}

export default Deployment;

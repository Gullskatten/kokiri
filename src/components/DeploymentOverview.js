import React, { Component } from "react";
import { ContentWrapper, Container, CardContainer } from "./Containers";
import Return from "./Return";
import RecentDeployments from "./RecentDeployments";
import {TitleLarge} from "./StyledTitles";

export default class DeploymentOverview extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <Container>
            <Return label="Back to Dashboard" />
            <CardContainer>
              <TitleLarge darkest>Deployments</TitleLarge>
              <RecentDeployments />
            </CardContainer>
          </Container>
        </ContentWrapper>
      </div>
    );
  }
}

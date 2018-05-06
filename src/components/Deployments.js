import React, { Component } from "react";
import { ContentWrapper, Container, CardContainer } from "./Containers";
import Return from "./Return";
import RecentDeployments from "./RecentDeployments";

export default class Deployments extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <Container>
            <Return label="Back to Dashboard" />
            <CardContainer>
              <RecentDeployments />
            </CardContainer>
          </Container>
        </ContentWrapper>
      </div>
    );
  }
}

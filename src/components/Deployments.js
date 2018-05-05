import React, { Component } from "react";
import { ContentWrapper, Container, CardContainer } from "./Containers";
import { DeploymentSection } from "./DeploymentSection";
import { TitleHuge } from "./StyledTitles";
import Return from './Return';

export default class Deployments extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <Container>
            <Return/>
            <CardContainer>
                <TitleHuge darkest>Recent Deployments</TitleHuge>
            </CardContainer>
          </Container>
        </ContentWrapper>
      </div>
    );
  }
}

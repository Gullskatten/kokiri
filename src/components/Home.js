import React, { Component } from "react";
import { ContentWrapper, Container, CardContainer } from "./Containers";
import { DeploymentSection } from "./DeploymentSection";
import { StatisticSection } from "./StatisticSection";
import { EnvironmentSection } from "./EnvironmentSection";
import { TitleHuge } from "./StyledTitles";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <Container>
            <TitleHuge white alternative>
                Dashboard
            </TitleHuge>
            <CardContainer>
              <StatisticSection />
              <DeploymentSection />
              <EnvironmentSection />
            </CardContainer>
          </Container>
        </ContentWrapper>
      </div>
    );
  }
}

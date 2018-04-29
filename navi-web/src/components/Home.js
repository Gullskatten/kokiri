import React, { Component } from "react";
import styled from "styled-components";
import { ContentWrapper, Container } from "./Containers";
import { DeploymentSection } from "./DeploymentSection";
import { StatisticSection } from "./StatisticSection";
import { EnvironmentSection } from "./EnvironmentSection";
import { TitleHuge } from "./StyledTitles";

const HomeContainer = styled.div`
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <Container>
            <TitleHuge normal alternative>
              Dashboard
            </TitleHuge>
            <HomeContainer>
              <StatisticSection />
              <DeploymentSection />
              <EnvironmentSection />
            </HomeContainer>
          </Container>
        </ContentWrapper>
      </div>
    );
  }
}

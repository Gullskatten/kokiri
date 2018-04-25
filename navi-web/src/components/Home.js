import React, { Component } from "react";
import styled from "styled-components";
import { ContentWrapper, Container } from "./Containers";
import { DeploymentSection } from "./DeploymentSection";
import { StatisticSection } from "./StatisticSection";
import { EnvironmentSection } from "./EnvironmentSection";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export default class Home extends Component {
  render() {
    return (
      <ContentWrapper>
        <Container>
          <HomeContainer>
            <DeploymentSection />
            <StatisticSection />
            <EnvironmentSection />
          </HomeContainer>
        </Container>
      </ContentWrapper>
    );
  }
}

import React from "react";
import { Section } from "./Section";
import Card, { CardsContainer } from "./Card";
import {TitleLargeBold} from './StyledTitles';

export const DeploymentSection = () => {
  return (
    <Section>
      <TitleLargeBold>Deployments</TitleLargeBold>
      <CardsContainer>
        <Card title="Deployment Overview" icon="cube" path="deployments/overview" />
        <Card title="Create New" icon="plus" path="deployments/new" />
        <Card
          title="Manage Deployments"
          icon="sliders"
          path="deployments/manage"
        />
      </CardsContainer>
    </Section>
  );
};

import React from "react";
import { Section } from "./Section";
import Card, { CardsContainer } from "./Card";
import { TitleLarge } from "./StyledTitles";
import { SectionDivider } from "./Dividers";

export const DeploymentSection = () => {
  return (
    <Section>
      <TitleLarge darkest>Deployments</TitleLarge>
      <CardsContainer>
        <Card title="Create New" icon="plus" path="deployments/new" />
        <Card
          title="Deployment Overview"
          icon="cube"
          path="deployments/overview"
        />
        <Card
          title="Manage Deployments"
          icon="sliders"
          path="deployments/manage"
        />
      </CardsContainer>
      <SectionDivider/>
    </Section>
  );
};

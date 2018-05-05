import React from "react";
import { Section } from "./Section";
import Card, { CardsContainer } from "./Card";
import { TitleLarge } from "./StyledTitles";

export const EnvironmentSection = () => {
  return (
    <Section>
      <TitleLarge darkest>Environments</TitleLarge>
      <CardsContainer>
        <Card title="Create New" icon="plus" path="environments/new" />
        <Card
          title="Environment Overview"
          icon="server"
          path="environments/overview"
        />
        <Card
          title="Manage Environments"
          icon="sliders"
          path="environments/manage"
        />
      </CardsContainer>
    </Section>
  );
};

import React from "react";
import Card, { CardsContainer } from "./Card";
import { Section } from "./Section";
import { TitleLarge } from "./StyledTitles";

export const EnvironmentSection = () => {
  return (
    <Section>
      <TitleLarge darkest>Environments</TitleLarge>
      <CardsContainer>
        <Card
          title="Create New"
          icon="plus"
          path="environments/new"
          disabled={true}
        />
        <Card
          title="Environment Overview"
          icon="server"
          path="environments/overview"
          disabled={true}
        />
        <Card
          title="Manage Environments"
          icon="sliders"
          path="environments/manage"
          disabled={true}
        />
      </CardsContainer>
    </Section>
  );
};

import React from "react";
import { Section } from "./Section";
import Card, {CardsContainer} from "./Card";
import {TitleLargeBold} from './StyledTitles';

export const EnvironmentSection = () => {
  return (
    <Section>
      <TitleLargeBold>Environments</TitleLargeBold>
      <CardsContainer>
        <Card title="Environment Overview" icon="server" path="environments/overview" />
        <Card title="Create New" icon="plus" path="environments/new" />
        <Card
          title="Manage Environments"
          icon="sliders"
          path="environments/manage"
        />
      </CardsContainer>
    </Section>
  );
};

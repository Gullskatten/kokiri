import React from "react";
import { Section } from "./Section";
import { TitleMediumThin } from "./StyledTitles";
import { SectionDivider } from "./Dividers";
import { CircularWrapper, ColumnedFlexWrapper } from "./Common";
import { StyledMessage } from "./StyledMessages";
import FontAwesome from "react-fontawesome";

export const StatisticSection = () => {
  return (
    <Section>
      <ColumnedFlexWrapper>
        <CircularWrapper darkest>
          <TitleMediumThin alternative>Environments</TitleMediumThin>
          22
        </CircularWrapper>
        <CircularWrapper darkest>
          <TitleMediumThin alternative>Builds today</TitleMediumThin>
          244
        </CircularWrapper>
        <CircularWrapper dark>
          <TitleMediumThin alternative>Successful</TitleMediumThin>
          241
        </CircularWrapper>
        <CircularWrapper light>
          <TitleMediumThin alternative>Failed</TitleMediumThin>
          3
        </CircularWrapper>
      </ColumnedFlexWrapper>
      <StyledMessage bgDarkest boxed clickable tiny>
        View more statistics <FontAwesome name="arrow-right" />
      </StyledMessage>
      <SectionDivider />
    </Section>
  );
};

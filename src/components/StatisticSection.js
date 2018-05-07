import React from "react";
import FontAwesome from "react-fontawesome";
import { CircularWrapper, ColumnedFlexWrapper } from "./Common";
import { SectionDivider } from "./Dividers";
import { Section } from "./Section";
import { StyledMessage } from "./StyledMessages";
import { TitleMediumThin } from "./StyledTitles";

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
      <StyledMessage bgDisabled boxed clickable tiny withIconRight>
        View more statistics <FontAwesome name="arrow-right" />
      </StyledMessage>
      <SectionDivider />
    </Section>
  );
};

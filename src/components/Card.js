import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { TitleLargeThin } from "./StyledTitles";
import { CircularWrapper } from "./Common";
import { StyledMessage } from "./StyledMessages";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled(({ active, ...rest }) => <Link {...rest} />)`
  flex-basis: 31%;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: center;
  background: #ffffff;
  text-decoration: none;
  color: ${props => props.theme.darkest};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;

  @media all and (max-width: 1300px) {
    flex-basis: 47%;
  }

  @media all and (max-width: 700px) {
    flex-basis: 100%;
  }

  ${props =>
    props.disabled &&
    css`
      background: #eee;
      color: #666;
    `};
`;

const Card = ({ title, icon, path, disabled }) => {
  return (
    <CardWrapper to={`/${path}`} disabled={disabled}>
      <TitleLargeThin darkest>{title}</TitleLargeThin>
      <CircularWrapper dark toDarkest>
        <FontAwesome name={icon || "question"} size="4x" />
      </CircularWrapper>
      {disabled && <StyledMessage lightest>Under construction :-)</StyledMessage>}
    </CardWrapper>
  );
};

export default Card;

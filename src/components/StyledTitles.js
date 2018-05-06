import styled, { css } from "styled-components";

export const TitleHuge = styled.h1`
  font-weight: 400;

  ${props =>
    props.smallScreenAware &&
    css`
      @media all and (max-width: 700px) {
        font-size: 1.3rem;
      }
    `};
  ${props =>
    props.tight &&
    css`
      margin: 0;
    `};
  ${props =>
    props.darkest &&
    css`
      color: ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
      color: ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
      color: ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
      color: ${props => props.theme.lightest};
    `};
  ${props =>
    props.white &&
    css`
      color: #fff;
    `};
  ${props =>
    props.alternative &&
    css`
      font-family: "Grand Hotel", cursive;
      font-size: 3rem;
      margin: 0;
    `};
`;

export const TitleHugeBold = TitleHuge.extend`
  font-weight: bold;
`;

export const TitleHugeThin = TitleHuge.extend`
  font-weight: 300;
`;

export const TitleLarge = styled.h2`
  font-weight: 400;

  ${props =>
    props.smallScreenAware &&
    css`
      @media all and (max-width: 700px) {
        font-size: 1.2rem;
      }
    `};
  ${props =>
    props.tight &&
    css`
      margin: 0;
    `};
  ${props =>
    props.darkest &&
    css`
      color: ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
      color: ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
      color: ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
      color: ${props => props.theme.lightest};
    `};

  ${props =>
    props.white &&
    css`
      color: #fff;
    `};

  ${props =>
    props.alternative &&
    css`
      font-family: "Grand Hotel", cursive;
      font-size: 2rem;
      margin: 0;
    `};
`;

export const TitleLargeBold = TitleLarge.extend`
  font-weight: bold;
`;

export const TitleLargeThin = TitleLarge.extend`
  font-weight: 300;
`;

export const TitleMedium = styled.h3`
  font-weight: 400;

  ${props =>
    props.smallScreenAware &&
    css`
      @media all and (max-width: 700px) {
        font-size: 1.1rem;
      }
    `};
  ${props =>
    props.tight &&
    css`
      margin: 0;
    `};
  ${props =>
    props.darkest &&
    css`
      color: ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
      color: ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
      color: ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
      color: ${props => props.theme.lightest};
    `};

  ${props =>
    props.alternative &&
    css`
      font-family: "Grand Hotel", cursive;
      font-size: 1.8rem;
      margin: 0;
    `};
`;

export const TitleMediumBold = TitleMedium.extend`
  font-weight: bold;
`;

export const TitleMediumThin = TitleMedium.extend`
  font-weight: 300;
`;

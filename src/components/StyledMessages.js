import styled, { css } from "styled-components";

export const StyledMessageBox = styled.div`
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  color: #fff;

  ${props =>
    props.success &&
    css`
      background: ${props => props.theme.darkest};
    `};
  ${props =>
    props.warn &&
    css`
      background: ${props => props.theme.warn};
    `};
  ${props =>
    props.error &&
    css`
      background: ${props => props.theme.error};
    `};
  ${props =>
    props.darkest &&
    css`
      background: ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
      background: ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
      background: ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
      background: ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
      background: ${props => props.theme.lightest};
    `};
  ${props =>
    props.disabled &&
    css`
      background: #eee;
    `};
`;

export const StyledMessage = styled.span`
  font-weight: 400;
  color: #fff;

  ${props =>
    props.success &&
    css`
      color: ${props => props.theme.success};
    `};
  ${props =>
    props.warn &&
    css`
      color: ${props => props.theme.warn};
    `};
  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.error};
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
    props.boxed &&
    css`
      padding: 0.3rem 0.7rem;
      border-radius: 5px;
    `};
  ${props =>
    props.showOnSmallScreen &&
    css`
      display: none;
      @media all and (max-width: 700px) {
        display: inline;
      }
    `};

  ${props =>
    props.hideOnSmallScreen &&
    css`
      @media all and (max-width: 700px) {
        display: none;
      }
    `};

  ${props =>
    props.clickable &&
    css`
      cursor: pointer;
    `};

  ${props =>
    props.tiny &&
    css`
      font-size: 0.8rem;
    `};

  ${props =>
    props.bgDarkest &&
    css`
      background: ${props => props.theme.darkest};
    `};
  ${props =>
    props.bgDark &&
    css`
      background: ${props => props.theme.dark};
    `};
  ${props =>
    props.bgNormal &&
    css`
      background: ${props => props.theme.normal};
    `};
  ${props =>
    props.bgLight &&
    css`
      background: ${props => props.theme.light};
    `};
  ${props =>
    props.bgLightest &&
    css`
      background: ${props => props.theme.lightest};
    `};
  ${props =>
    props.bgDisabled &&
    css`
      background: #ccc;
    `};
  ${props =>
    props.tinyUnderlined &&
    css`
      border-bottom: 1px solid ${props => props.theme.normal};
    `};

  ${props =>
    props.withIconRight &&
    css`
      margin-left: 4px;
    `};

  ${props =>
    props.marginLeft10 &&
    css`
      margin-left: 10px;
    `};
`;

import React from "react";
import styled, { css } from "styled-components";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";

const Button = styled.button`
  padding: 1rem 1.4rem;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid rgba(0,0,0, 0.1);
  }

  &:hover {
    transition: all 0.25s ease-in-out;
    filter: brightness(105%);
  }

  span {
    margin-left: 6px;
  }

  @media all and (max-width: 700px) {
    font-size: 1.1rem;
  }
  @media all and (max-width: 550px) {
    font-size: 0.9rem;
    span {
        margin-left: 3px;
      }
  }


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
      pointer-events: none;
    `};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      min-width: 50%;
    `};

  ${props =>
    props.cancel &&
    css`
      background: #ddd;
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;

  > button {
    margin: 0 5px;
  }
`;

export const StyledButtonGroupWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

export const StyledButton = ({
  title,
  onClick,
  darkest,
  dark,
  normal,
  light,
  lightest,
  success,
  error,
  disabled,
  fullWidth,
  cancel,
  icon
}) => {
  return (
    <Button
      darkest={darkest}
      dark={dark}
      normal={normal}
      light={light}
      lightest={lightest}
      success={success}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      cancel={cancel}
      onClick={onClick}
    >
      {title || "..."}
      {icon && (
        <StyledMessage white>
          <FontAwesome name={icon} />
        </StyledMessage>
      )}
    </Button>
  );
};

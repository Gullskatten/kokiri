import styled, { css } from "styled-components";

export const CircularWrapper = styled.div`
  margin: 2rem auto;
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50%;
  background: ${props => props.theme.dark};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  
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
    props.toDarkest &&
    css`
    &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.darkest};
    }
    `};
  ${props =>
    props.toDark &&
    css`
    &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.dark};
    }
    `};
  ${props =>
    props.toNormal &&
    css`
    &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.normal};
    }
    `};
  ${props =>
    props.toLight &&
    css`
    &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.light};
    }
    `};
  ${props =>
    props.toLightest &&
    css`
    &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.lightest};
    }
    `};
`;

export const ColumnedFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
 
  @media all and (max-width: 700px) {
    display: block;
  }
`;


export const CircularIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #eee;
  background: #fff;

  ${props =>
    props.small &&
    css`
      width: 60px;
      height: 60px;
    `};

  @media all and (max-width: 700px) {
    display: none;
  }
`;
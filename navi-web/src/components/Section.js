import styled, {css} from 'styled-components';

export const Section = styled.div`
    width: 100%;
    
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
`;

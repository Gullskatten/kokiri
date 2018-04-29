import styled, {css} from "styled-components";

export const Divider = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const FatSectionDivider = Divider.extend`
  border-bottom: 3px solid ${props => props.theme.normal};
  
  ${props =>
    props.darkest &&
    css`
    border-bottom: 3px solid ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
    border-bottom: 3px solid ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
    border-bottom: 3px solid ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
    border-bottom: 3px solid ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
    border-bottom: 3px solid ${props => props.theme.lightest};
    `};
`;

export const SectionDivider = Divider.extend`
  border-bottom: 1px solid ${props => props.theme.normal};

  ${props =>
    props.darkest &&
    css`
    border-bottom: 1px solid ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
    border-bottom: 1px solid ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
    border-bottom: 1px solid ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
    border-bottom: 1px solid ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
    border-bottom: 1px solid ${props => props.theme.lightest};
    `};
`;

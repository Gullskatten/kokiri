import styled, { css } from "styled-components";
import { TitleLarge } from "./StyledTitles";
import React from "react";

const DefaultStyledInput = styled.input`
  border: 4px dashed #eee;
  padding: 1.3rem 1.7rem;
  font-size: 1.4rem;
  font-style: italic;
  
  &:hover {
    transition: all 0.25s ease-in-out;
    border: 4px dashed #ddd;
  }

  &:focus {
    outline: 0;
    border: 4px solid #ddd;
  }

  &:placeholder {
      color: #eee;
  }

  ${props =>
    props.smallScreenAware &&
    css`
      @media all and (max-width: 700px) {
        font-size: 1.1rem;
      }
      @media all and (max-width: 550px) {
        font-size: 0.9rem;
      }
    `};
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = ({
  placeholder,
  label,
  titleDivider,
  autoFocus,
  onChange,
  name
}) => {
  return (
    <StyledInputWrapper>
      <TitleLarge darkest tinyUnderlined smallScreenAware>
        {label}
      </TitleLarge>
      <DefaultStyledInput
        smallScreenAware
        placeholder={placeholder || "..."}
        autoFocus={autoFocus}
        onChange={onChange}
        name={name}
      />
    </StyledInputWrapper>
  );
};

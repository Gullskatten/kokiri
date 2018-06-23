import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import thumb from "../assets/img/oot/PNG/kokiri_sword.png";
import ThemeContainer from "../containers/ThemeContainer";
import { TitleHuge } from "./StyledTitles";

import { Subscribe } from "unstated";
import { Tooltip } from "react-tippy";

const NavbarWrapper = styled.div`
  position: sticky;
  top: 15px;
  width: 100%;
  padding: 0 2rem;
  color: ${props => props.theme.normal};
  z-index: 1;
  
  @media all and (max-width: 1600px) {
    position: relative;
  }
`;

const CircularProfileThumb = styled.img`
  height: 30px;
  width: 30px;
  background-image: linear-gradient(
    to top,
    ${props => props.theme.backgroundTop} 0%,
    ${props => props.theme.backgroundBottom} 100%
  );
  border-radius: 50%;
  padding: 3px;
`;

const CircularOption = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  background-image: linear-gradient(
    to top,
    ${props => props.backgroundTop} 0%,
    ${props => props.backgroundBottom} 100%
  );

  ${props =>
    props.selected &&
    css`
      border: 2px solid #fff;
    `};
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${props =>
    props.centered &&
    css`
      width: 100%;
      align-items: center;
    `};
`;

const AppBrandWrapper = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  padding: 3px 7px;
  border-radius: 20px;
  img {
    margin-right: 10px;
  }
`;

const AccountInfoWrapper = styled.div`
  align-items: center;
  border-radius: 20px;
  background: ${props => props.theme.normalWithAlpha};
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.4rem 0.8rem;
  text-align: center;

  span {
    color: #fff;
    font-size: 1.2rem;
    margin-left: 10px;
    margin-bottom: 3px;
  }

  &:hover {
    transition: background 0.5s ease;
    background: ${props => props.theme.normal};
  }
`;

const ThemeOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
`;

export default class Navbar extends Component {
  renderOptions = (selectedTheme, themes, changeTheme) => {
    return themes.map((theme, idx) => {
      return (
        <Tooltip
          title={theme.key}
          position="bottom"
          trigger="mouseenter"
          key={idx}
        >
          <CircularOption
            selected={selectedTheme.key === theme.key}
            key={idx}
            backgroundTop={theme.backgroundTop}
            backgroundBottom={theme.backgroundBottom}
            onClick={() => changeTheme(theme)}
          />
        </Tooltip>
      );
    });
  };

  render() {
    return (
      <Subscribe to={[ThemeContainer]}>
        {({ state, changeTheme }) => {
          return (
            <NavbarWrapper>
              <FlexWrapper centered>
                <AppBrandWrapper to="/">
                  <TitleHuge white alternative>
                    Kokiri
                  </TitleHuge>
                </AppBrandWrapper>
                <div>
                  <AccountInfoWrapper>
                    <CircularProfileThumb src={thumb} alt="navii93" />{" "}
                    <span>oboygutt</span>
                  </AccountInfoWrapper>
                  <ThemeOptions>
                    {this.renderOptions(
                      state.selectedTheme,
                      state.themes,
                      changeTheme
                    )}
                  </ThemeOptions>
                </div>
              </FlexWrapper>
            </NavbarWrapper>
          );
        }}
      </Subscribe>
    );
  }
}

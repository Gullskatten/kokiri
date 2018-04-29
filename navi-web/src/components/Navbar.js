import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "../assets/img/navi/navi5.png";
import FontAwesome from "react-fontawesome";
import {float} from '../utils/CommonAnimations';
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  background: #fff;
  line-height: 60px;
  padding: 0 2rem;
  color: ${props => props.theme.normal};
  z-index: 1;
`;

const Logo = styled.img`
  height: 35px;
  margin-bottom: 5px;
  display: inline-block;
  animation: ${float} 2s cubic-bezier(0.61, 0.32, 0.86, 0.83) infinite;
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

const AppTitle = styled.h2`
  margin: 0;
  font-family: "Grand Hotel", cursive;
  font-size: 2.5rem;
  font-weight: normal;
`;

const AppBrandWrapper = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.darkest};
  img {
    margin-right: 10px;
  }
`;

const AccountInfoWrapper = styled.div`
  cursor: pointer;

  span {
    color: ${props => props.theme.darkest}
    
    &:first-child {
      margin-right: 5px;
    }
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <FlexWrapper centered>
          <AppBrandWrapper to="/">
            <Logo src={logo} alt="logo" />
            <AppTitle>Navi</AppTitle>
          </AppBrandWrapper>
          <AccountInfoWrapper>
            <FontAwesome name="user" /> <span>Navii93</span>
          </AccountInfoWrapper>
        </FlexWrapper>
      </NavbarWrapper>
    );
  }
}

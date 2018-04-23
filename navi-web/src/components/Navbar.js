import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components';
import logo from '../assets/img/navi/navi1.png';
import FontAwesome from 'react-fontawesome';

const NavbarWrapper = styled.nav`
  height: 60px;
  width: 100%;
  background: #222;
  border-bottom: 2px solid #444;
  line-height: 60px;
  padding: 0 2rem;
  color: #fff;
`;

const float = keyframes`
  50% {
  transform: translateY(4px);
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-bottom: 5px;
  display: inline-block;
  animation: ${float} 2s cubic-bezier(.61,.32,.86,.83) infinite;
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
    font-family: 'Grand Hotel', cursive;
    font-size: 2.5rem;
    font-weight: normal;
`;  

const AppBrandWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
    `;

const AccountInfoWrapper = styled.div``;

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <FlexWrapper centered>
        <AppBrandWrapper>
          <Logo src={logo} alt="logo" />
          <AppTitle>Navi</AppTitle>
        </AppBrandWrapper>
          <AccountInfoWrapper>
            <FontAwesome name="user" /> Navi
          </AccountInfoWrapper>
        </FlexWrapper>
      </NavbarWrapper>
    );
  }
}

import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {TitleLargeThin} from './StyledTitles';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const CardWrapper = styled(({ active, ...rest }) => <Link {...rest} />)`
  flex-basis: 31%;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: center;
  border: 1px solid #fafafa;
  background: #ffffff;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: #000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;

  @media all and (max-width: 1300px) {
    flex-basis: 47%;
  }

  @media all and (max-width: 700px) {
    flex-basis: 100%;
  }
`;

const CardIcon = styled.div`
  margin: 2rem auto;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  border-radius: 50%;
  background: #eee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

   &:hover {
            transition: color 0.25s ease-in-out;
            color: ${props => props.theme.paradisePink};
        }
   }
`;

const Card = ({title, icon, path}) => {
    return (
      <CardWrapper to={`/${path}`}>
      <TitleLargeThin>{title}</TitleLargeThin>
      <CardIcon>
        <FontAwesome name={icon || "question"} size="4x" />
      </CardIcon>
    </CardWrapper>
    );
}

export default Card;

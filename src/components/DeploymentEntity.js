import React from "react";
import styled from "styled-components";
import { CircularIcon } from "./Common";
import { TitleLarge } from "./StyledTitles";
import FontAwesome from "react-fontawesome";
import { StyledMessage } from "./StyledMessages";
import { Tooltip } from "react-tippy";

const DeploymentEntityHeader = styled.div`
  display: inline-flex;
  align-items: center;

  @media all and (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DeploymentEntityMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media all and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const DeploymentEntity = ({ icon, title, description, status }) => {
  return (
    <DeploymentEntityHeader>
      {status && (
        <Tooltip
          title={status.description}
          position="bottom"
          trigger="mouseenter"
        >
          <CircularIcon
            tiny
            marginRight10
            success={status.key === "COMPLETED"}
            error={status.key === "FAILED"}
            warn={status.key === "IN_PROGRESS"}
            disabled={status.key === "NOT_STARTED"}
          >
            <StyledMessage tiny>
              <FontAwesome
                name={status.icon || "question"}
                size="2x"
                spin={status.key === "IN_PROGRESS"}
              />
            </StyledMessage>
          </CircularIcon>
        </Tooltip>
      )}

      <CircularIcon small>
        <StyledMessage dark>
          <FontAwesome name={icon || "question"} size="2x" />
        </StyledMessage>
      </CircularIcon>
      <DeploymentEntityMeta>
        <TitleLarge tight dark smallScreenAware>
          {title}
        </TitleLarge>
        {status && (
          <StyledMessage marginLeft10 dark showOnSmallScreen>
            <FontAwesome
              name={status.icon}
              spin={status.key === "IN_PROGRESS"}
            />
          </StyledMessage>
        )}

        <StyledMessage normal tiny>
          {description}
        </StyledMessage>
      </DeploymentEntityMeta>
    </DeploymentEntityHeader>
  );
};

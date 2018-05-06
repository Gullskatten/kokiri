import React, { Component } from "react";
import { Section } from "./Section";
import { TitleMedium } from "./StyledTitles";
import { SectionDivider } from "./Dividers";
import DeploymentList from "./DeploymentList";
import ContentLoader from "./ContentLoader";
import { recentDeployments } from "../assets/sample/recent_deployments";

class RecentDeployments extends Component {
  state = {
    isLoading: false,
    recentDeployments: []
  };

  componentDidMount() {
    this.fetchDeployments();
  }

  fetchDeployments = async () => {
    this.setState({
      isLoading: true
    });

    //const response = await fetch(" API -> deployments -> recent");
    //const data = await response.json();

    this.setState({
      recentDeployments: recentDeployments,
      isLoading: false
    });
  };

  render() {
    const { recentDeployments, isLoading } = this.state;

    return (
      <Section>
        <TitleMedium darkest>Recent Deployments</TitleMedium>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <DeploymentList deployments={recentDeployments} />
        )}

      </Section>
    );
  }
}

export default RecentDeployments;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import RoadmapCard from "./RoadmapCard";


const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

const FlexContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FlexContainerHeaders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const RoadmapTitle = styled.h2`
  color: #3a4374;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

const RoadmapSubTitle = styled.p`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


function RoadMapDesktop({plannedFeedbacks,inProgressFeedback,liveFeedback}) {
    return (
        <RoadmapGrid>
        <FlexContainers>
          <FlexContainerHeaders>
            <RoadmapTitle>Planned</RoadmapTitle>
            <RoadmapSubTitle>Ideas prioritized for research</RoadmapSubTitle>
          </FlexContainerHeaders>
          {plannedFeedbacks.map((feedback) => (
            <RoadmapCard key={feedback.id} feedback={feedback} color={`#F49F85`} />
          ))}
        </FlexContainers>
        <FlexContainers>
          <FlexContainerHeaders>
            <RoadmapTitle>In-Progress</RoadmapTitle>
            <RoadmapSubTitle>Currently being developed</RoadmapSubTitle>
          </FlexContainerHeaders>
          {inProgressFeedback.map((feedback) => (
            <RoadmapCard key={feedback.id} feedback={feedback} color={`#AD1FEA`} />
          ))}
        </FlexContainers>
        <FlexContainers>
          <FlexContainerHeaders>
            <RoadmapTitle>Live</RoadmapTitle>
            <RoadmapSubTitle>Released features</RoadmapSubTitle>
          </FlexContainerHeaders>
          {liveFeedback.map((feedback) => (
            <RoadmapCard key={feedback.id} feedback={feedback} color={`#62BCFA`} />
          ))}
        </FlexContainers>
      </RoadmapGrid>
    )
}

export default RoadMapDesktop

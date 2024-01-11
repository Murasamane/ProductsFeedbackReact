import styled from "styled-components";

export const ContentTitle = styled.h3`
  color: #3a4374;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const ContentDescription = styled.p`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContentTag = styled.div`
  color: #4661e6;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  background: #f2f4ff;
  align-self: flex-start;
  padding: 0.6rem 1.6rem;
  text-transform: capitalize;
`;

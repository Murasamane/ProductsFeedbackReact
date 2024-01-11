import styled from "styled-components";

export const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.4rem;
  width: 25.5rem;
  max-width: 100%;
  height: 13.7rem;
  border-radius: 10px;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  @media (max-width: 860px) {
    height: 100%;
  }
`;

export const SidebarTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const SidebarSubTitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.75;
`;

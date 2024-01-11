import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  max-width: 100%;
  margin-top: 3rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const UserInfoDetails = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
`;

export const ProfileImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
  max-width: 100%;
`;

export const UserName = styled.div`
  color: #3a4374;
  letter-spacing: -0.19px;
  font: 700 1.4rem Jost, sans-serif;
`;

export const UserHandle = styled.div`
  color: #647196;
  margin-top: 6px;
  white-space: nowrap;
  font: 400 1.4rem Jost, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const ReplyButton = styled.div`
  color: #4661e6;
  align-self: center;
  margin: auto 0;
  font: 600 1.3rem Jost, sans-serif;
  cursor: pointer;
`;

export const Message = styled.div`
  color: #647196;
  align-self: end;
  margin-top: 2.1rem;
  display: flex;
   align-items: center;
   gap: 0.5rem;
  font: 400 1.5rem Jost, sans-serif;
  grid-column: 1 / -1;
  margin-left: 6rem;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-left: 6rem;
  grid-column: 1 / -1;
`;

export const UserTagName = styled.p`
  color: #AD1FEA;
  font-weight: 900;
  font-size: 1.5rem;
`
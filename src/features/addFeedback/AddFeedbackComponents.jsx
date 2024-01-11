import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AddFeedbackHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAddFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  width: 54rem;
  max-width: 100%;
  margin: auto;
`;
export const FeatureGoBackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #647196;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3rem;
`;
export const Container = styled.form`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4.5rem 4.2rem;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 2rem;
  }
`;

export const Title = styled.div`
  color: #3a4374;
  letter-spacing: -0.33px;
  align-self: stretch;
  margin-top: 0.9rem;
  font-size: 2.4rem;
  font-weight: 700;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: #3a4374;
  letter-spacing: -0.19px;
  align-self: stretch;
  margin-top: 5.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Description = styled.div`
  color: #647196;
  align-self: stretch;
  margin-top: 1.1rem;
  font-size: 1.4rem;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const InputField = styled.input`
  border-radius: 5px;
  background-color: #f7f8fd;
  align-self: stretch;
  display: flex;
  margin-top: 1.8rem;
  flex-direction: column;
  border: none;
  padding: 1.4rem;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CategoryContainer = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 2rem;
  }
`;

export const Select = styled.select`
  background-color: #f7f8fd;
  border: none;
  width: 100%;
  padding: 1.3rem 2.4rem;
`;

export const ButtonContainer = styled.div`
  align-self: end;
  display: flex;
  margin-top: 3.2rem;
  gap: 1.6rem;
`;

export const CancelButton = styled.button`
  color: #f2f4fe;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #3a4374;
  flex-grow: 1;
  justify-content: center;
  padding: 1.7rem 2.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  border: none;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 2rem;
  }
`;

export const AddFeedbackButton = styled.button`
  color: #f2f4fe;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #ad1fea;
  flex-grow: 1;
  justify-content: center;
  padding: 1.7rem 2.5rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 2rem;
  }
`;

export const PlusImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-bottom: -3rem;
  margin-left: 3rem;
  z-index: 9999;

  @media(max-width:991px){
    margin-left: 1.5rem;
    margin-bottom: -1rem;
    width: 3rem;
    height: 3rem;
  }
`;

export const Option = styled.option``;

import styled from "styled-components";

export const StyledAddComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 2.4rem 3.4rem;
  gap: 2.4rem;
  border-radius: 1rem;
`;
export const Textarea = styled.textarea`
  border-radius: 5px;
  background: #f7f8fd;
  color: #8c92b3;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
  max-width: 100%;
  height: 8rem;
  padding: 1.6rem 2.4rem;
  border: none;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormTitle = styled.h2`
  color: #3a4374;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;
export const CharacterCount = styled.p`
  color: #647196;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubmitButton = styled.button`
  border-radius: 10px;
  background: #ad1fea;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1.2rem 2.4rem;
  border: none;
`;
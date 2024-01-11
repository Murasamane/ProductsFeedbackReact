import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`;

const Image = styled.img`
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 130px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const Message = styled.div`
  color: #3a4374;
  text-align: center;
  letter-spacing: -0.33px;
  align-self: center;
  margin-top: 60px;
  white-space: nowrap;
  font: 700 24px Jost, sans-serif;
`;

const Description = styled.div`
  color: #647196;
  text-align: center;
  align-self: stretch;
  margin-top: 25px;
  width: 100%;
  font: 400 16px Jost, sans-serif;
`;

const Button = styled(Link)`
  color: #f2f4fe;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 10px;
  background-color: #ad1fea;
  align-self: center;
  margin-top: 50px;
  justify-content: center;
  padding: 17px 26px;
  font: 700 14px Jost, sans-serif;
  cursor: pointer;
`;

function PageNotFound() {
  return (
    <Wrapper>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36c2146912790429c4b299b3fa06301763ca07939f89b2ed9fd2e8567dd3b2d?apiKey=41467108e9bc4503a22c8f28d1c60500&"
      />
      <Message>No feedback found</Message>
      <Description>
        If feedback is not found please move to the home page and add it
      </Description>
      <Button to="/">Go Back</Button>
    </Wrapper>
  );
}

export default PageNotFound;

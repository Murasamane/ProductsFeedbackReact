import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledBackToTopBtn = styled.button`
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  width: 5rem;
  height: 5rem;
  color: #fff;
  border-radius: 50%;
  border: none;
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  font-size: 2rem;
  font-weight: 900;
`;

function BackToTopBtn() {
  const [viewportPos, setViewportPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setViewportPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {viewportPos > 0 && (
        <StyledBackToTopBtn onClick={handleToTop}>&#8593;</StyledBackToTopBtn>
      )}
    </>
  );
}

export default BackToTopBtn;

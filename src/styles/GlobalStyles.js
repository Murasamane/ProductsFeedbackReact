import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
  }
  *:disabled {
    cursor: not-allowed;
  }
  input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: #f7f8fd;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar{
   width: 0;
  }
  a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
img {
  max-width: 100%;
}
  .loader {
    width: 5rem;
    align-self: center;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: l1 1s infinite;
    position: absolute;
    top: 50%;
    left: 60%;
  
  }

  @media(max-width:860px){
    .loader{
      top: 100%;
      left: 50%;
    }
  }
  @keyframes l1 {
    to {
      transform: rotate(0.5turn);
    }
  }
  
  .secondaryLoader{
    width: 5rem;
    align-self: center;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: l1 1s infinite;
    position: absolute;
    top: 50%;
    left: 50%;
  }


  @keyframes l1 {
    to {
      transform: rotate(0.5turn);
    }
  }

  @media(max-width:860px){
    html{
      font-size: 55.2%;
    }
  }
  @media(max-width:690px){
    html{
      font-size: 50%;
    }
  }
  @media(max-width:600px){
    html{
      font-size: 40%;
    }
  }
  @media(max-width:500px){
    html{
      font-size: 30%;
    }
  }
`;

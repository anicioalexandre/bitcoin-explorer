import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background:#484848;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: gray;
    border-radius: 3px;
    margin: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e5ecf4;
    border-radius: 3px;
    border: 0.5px solid gray;
  }
`;

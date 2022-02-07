import styled, { injectGlobal } from 'vue-styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
`;

export default injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #app {
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }

  body {
    background: #f8f8f8;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    display: flex;
  }

`;

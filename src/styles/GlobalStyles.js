import styled, { injectGlobal } from 'vue-styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  flex-direction: column;
  background: #0D0D0D;
  overflow: auto;
  color: #fff;
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
    overflow: hidden;
  }

  body {
    background: #0D0D0D;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

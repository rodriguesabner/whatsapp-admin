import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  overflow: hidden;
  width: 100%;

  h2 {
    font-size: 14px;
    color: #999;
    margin-bottom: 1em;
  }
`;

export const Container = styled.ul`
  width: 100%;
  overflow: auto hidden;
  white-space: nowrap;
  padding-bottom: 1em;
  position: relative;

  li {
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
    cursor: pointer;
    background: #212529;
    padding: 20px;
    margin-right: 1em;
    height: 200px;
    width: 200px;
    overflow: hidden;

    .wrapper__session {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      header {
        display: flex;
        justify-content: space-between;
      }

      p {
        font-weight: 600;
        font-size: 14px;
        color: #999;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 150px;
      }
    }

  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #1b1c21;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

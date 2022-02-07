import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  //background: red;
  background: #212529;
  border-radius: 20px;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  h2 {
    margin: 1em 0;
    padding: 0 2em;
    font-size: 20px;
    color: #fff;
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 2em;
  border-top: 1px solid #999;

  li {
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1em;
    padding: 10px;

    p {
      font-weight: 600;
      color: #fff;
    }
  }
`;

import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  width: 100%;
  //background: red;
  background: #fff;
  border-radius: 20px;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  h2 {
    margin: 1em 0;
    padding: 0 2em;
    font-size: 18px;
    color: #0f45ff;
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 2em;
  border-top: 1px solid #eee;

  li {
    width: 100%;
    padding: 1em;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #eee;
    margin-bottom: 1.5em;

    p {
      font-weight: 600;
    }
  }
`;

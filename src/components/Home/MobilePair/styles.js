import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  width: 100%;

  .title {
    font-size: 14px;
    color: #999;
    margin-bottom: 1em;
    font-weight: 600;
  }
`;

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;

  li {
    padding: 3em 2em;
    margin: 10px;
    border-radius: 4px;
    transition-duration: 300ms;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background: #212529;

    p {
      color: #ddd;
      font-size: 14px;
    }

    h2 {
      margin-top: 5px;
      margin-bottom: 1em;
      color: #fff;
      font-size: 18px;
    }
    :first-child {
      margin-left: 0;
      width: 60%;
    }

    :last-child {
      margin-right: 0;
      width: 40%;
    }
  }
`;

import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  width: 100%;
  padding-top: 2em;
`;

export const TopContent = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;

  li {
    width: 33.33%;
    padding: 3em 2em;
    margin: 10px;
    border-radius: 4px;
    transition-duration: 300ms;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background: #121212;

    p {
      color: #ddd;
    }

    h2 {
      margin-top: 10px;
      color: #fff;
    }

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

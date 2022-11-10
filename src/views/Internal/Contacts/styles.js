import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100px;
  padding: 1.5em 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 200ms;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  p {
    font-size: 16px;
  }

  :hover {
    background-color: #212121;
    transform: scale(1.1);
  }
`;

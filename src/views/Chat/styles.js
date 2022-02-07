import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  padding: 2em;
`;

export const ContactsContainer = styled.div`
  width: 20%;
`;

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ChatContainer = styled.div`
  width: 80%;
`;

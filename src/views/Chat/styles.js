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
  padding: 10px;
  cursor: pointer;
  transition-duration: 200ms;
  border-radius: 10px;
  margin-bottom: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    font-size: 1.2em;
    font-weight: bold;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :hover {
    background-color: #000;
  }

  :active {
    background-color: #ececec;
  }
`;

export const ChatContainer = styled.div`
  width: 80%;
`;

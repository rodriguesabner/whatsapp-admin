import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const TopContent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;

  button {
    background: transparent;
    color: #838383;
    border: 0;
    cursor: pointer;
  }
`;

export const TopSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #838383;
  margin-bottom: 1em;
  opacity: .2;
`;

export const TitleComponent = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const PlusButton = styled.div`
  background: #121212;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
  margin-top: 1em;

  li {
    margin-right: 20px;
    cursor: pointer;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
`;

export const ScheduledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  overflow: auto;
  white-space: nowrap;
  width: 100%;
  margin-top: 1em;
`;

export const UserCard = styled.div`
  margin-right: 20px;
  cursor: pointer;
  background: #121212;
  border-radius: 8px;
  padding: 15px;
  height: 170px;
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2px solid #0EBE4F;

  p {
    font-weight: 500;
  }

  img {
    width: 70px !important;
    height: 70px !important;
    border-radius: 10px;
    margin-bottom: 5px;
    object-fit: cover;
  }
`;

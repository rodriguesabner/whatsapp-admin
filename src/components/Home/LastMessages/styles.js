import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const TitleComponent = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
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

export const MessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  margin-top: 1em;
  overflow: hidden auto;
  max-height: 400px;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1em;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      width: 100%;

      p {
        max-width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

import styled from 'vue-styled-components';

export const Layout = styled.header`
  display: flex;
  align-items: center;
  height: 68px;
  width: 100%;
  background: #121212;
  border-bottom: 1px solid #838383;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 2em;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 2em;
  border-radius: 10px;

  input {
    width: 95%;
    background: transparent;
    border: 0;
    padding: 10px;
    margin-right: 1em;
    border-right: 1px solid rgba(0, 0, 0, .3);
    font-size: 16px;

    ::placeholder {
      color: #ccc;
    }
  }

  svg {
    color: #505050;

    :last-child {
      cursor: pointer;
    }
  }
`;

export const RightContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-left: 1em;
    cursor: pointer;

    :nth-child(3) {
      margin-left: 0;
    }

    svg {
      color: #505050;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;

export const SeparatorComponent = styled.div`
  width: 1px;
  height: 48px;
  background: #303030;
  margin: 0 1em;
`;

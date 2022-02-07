import styled from 'vue-styled-components';

export const Layout = styled.header`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
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
  background: #212529;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
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

    ::placeholder{
      color: #ccc;
    }
  }

  svg {
    color: #777;

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
    background: #212529;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-left: 1em;
    cursor: pointer;

    svg {
      color: #eee;
    }
  }
`;

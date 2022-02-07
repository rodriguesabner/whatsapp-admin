import styled from 'vue-styled-components';

export const Layout = styled.aside`
  display: flex;
  width: 320px;
  height: 100%;
  background: #fff;
`;

export const WrapperMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 2em;

  li {
    display: flex;
    align-items: center;
    padding: 14px;
    border-radius: 4px;
    margin-bottom: 1em;

    a {
      text-decoration: none;
      color: #666;
      font-weight: 600;
      margin-left: 1em;
    }

    svg {
      color: #666;
    }
  }

  li.active {
    background: #e6ebfe;

    a {
      color: #0f45ff;
    }

    svg {
      color: #0f45ff;
    }
  }
`;

import styled from 'vue-styled-components';

export const Layout = styled.aside`
  display: flex;
  width: 320px;
  height: 100%;
  background: #212529;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100%;
  }
`;

export const WrapperMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 2em;

  @media screen and (max-width: 1024px) {
    padding: 0;

    li {
      a {
        width: 100%;
        justify-content: center;

        svg {
          height: 30px;
          width: 100%;
        }

        span {
          display: none;
        }
      }
    }
  }

  li {
    display: flex;
    padding: 14px;
    border-radius: 4px;
    margin-bottom: 1em;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #999;
      font-weight: 600;

      span {
        margin-left: 1em;
      }
    }

    svg {
      color: #999;
    }
  }

  li.active {
    background: rgba(51, 57, 63, 0.48);

    a {
      color: #3e5dce;
    }

    svg {
      color: #3e5dce;
    }
  }
`;

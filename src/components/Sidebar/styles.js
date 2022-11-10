import styled from 'vue-styled-components';

export const Layout = styled.aside`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  height: 100%;
  padding: 1em 2em;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100%;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;

  p {
    color: #838383;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const WrapperMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  list-style: none;

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
    border-bottom: 1px solid #1F1F1F;
    margin-bottom: 5px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #E0E0E0;
      font-weight: 500;

      span {
        margin-left: 1em;
      }
    }

    svg {
      color: #999;
    }

    :last-child {
      border-bottom: 0;
    }
  }

  li.active {
    background: #121212;

    a {
      color: #E0E0E0;
    }

    svg {
      color: #5CE890;
    }
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1em;
`;

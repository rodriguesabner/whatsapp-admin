import styled from 'vue-styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  width: 100%;
`;

export const WrapperContainers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

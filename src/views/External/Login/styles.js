import styled from 'vue-styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  background: #212529;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;

  h1 {
    margin-bottom: 2em;
  }
`;

export const Formulario = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input {
    padding: 10px;
    width: 100%;
    margin-bottom: 1em;
    min-height: 48px;
    border: 0;
    border-bottom: 1px solid #ccc;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #212529 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
  }

  a {
    display: flex;
    align-items: center;
    background: #5b73e8;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    padding: 10px 2em;
    min-height: 48px;
    border-radius: 4px;
    margin-top: 1em;
    cursor: pointer;
    transition-duration: 200ms;

    :hover {
      opacity: .8;
    }
  }
`;

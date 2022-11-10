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
  border-radius: 10px;
  max-width: 500px;
  width: 100%;

  h1 {
    margin-bottom: 1.5em;
  }
`;

export const Formulario = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 14px;
    margin-top: 1em;
    margin-bottom: 10px;
    font-weight: 500;
    color: #E0E0E0;

    :first-child {
      margin-top: 0;
    }
  }

  input {
    padding: 10px;
    width: 100%;
    margin-bottom: 1em;
    min-height: 48px;
    border: 0;
    border-bottom: 1px solid #5CE890;
    background: #1F1F1F;
    color: #fff;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #1F1F1F inset !important;
      -webkit-text-fill-color: #fff !important;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(254deg, #5CE890 15.83%, #1FBC59 76.29%);
    text-decoration: none;
    font-weight: 600;
    color: #000;
    padding: 10px 2em;
    min-height: 48px;
    border-radius: 4px;
    margin-top: 1em;
    cursor: pointer;
    transition-duration: 200ms;
    width: 100%;

    :hover {
      opacity: .8;
    }
  }
`;

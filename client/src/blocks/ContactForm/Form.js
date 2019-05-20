import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  background: rgba(0, 0, 0, 0.1);
  /* border: black 2px solid; */
  border-radius: 10px;
  margin-top: 15%;
  padding: 1em;

  .h2 {
    font-family: 'Raleway', Sans-Serif;
  }

  input,
  textarea {
    width: 400px;
    display: block;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: 'Open Sans', Sans-Serif;
    letter-spacing: 0.25px;
    font-size: 1em;
    justify-self: center;
    background: rgba(0, 0, 0, 0.1);
  }

  input {
    margin-bottom: 15px;
    height: 25px;
    font-weight: bold;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #0611613a inset;
  }

  textarea {
    height: 125px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 475px) {
    input,
    textarea {
      width: 90%;
    }
  }
`;

export default Form;

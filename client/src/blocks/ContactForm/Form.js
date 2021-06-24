import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-top: 8%;
  padding: 1em;

  input,
  textarea {
    width: 85%;
    display: block;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: 'Open Sans', Sans-Serif;
    letter-spacing: 0.25px;
    font-size: 1em;
    justify-self: center;
    -webkit-box-shadow: inset  0px 0px 5px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: inset  0px 0px 5px 0px rgba(0,0,0,0.35);
    box-shadow: inset  0px 0px 3px 0px rgba(0,0,0,0.35);
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
    height: 90%;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 475px) {
    input,
    textarea {
      width: 70%;
      height: 50%;
    }
  }
`;

export default Form;

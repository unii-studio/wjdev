import styled from 'styled-components';

const Button = styled.button`
  width: 60%;
  height: 40px;
  justify-self: center;
  font-family: 'Raleway', Sans-Serif;

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:visited {
    background-color: #061161 !important;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export default Button;

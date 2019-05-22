import styled from 'styled-components';

const Button = styled.button`
  width: 60%;
  height: 40px;
  justify-self: center;
  font-family: 'Raleway', Sans-Serif;
  background-color: #061161;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: width 0.2s ease;

  &:hover {
    width: 62%;
  }

  &:active {
    width: 65%;
  }
`;

export default Button;

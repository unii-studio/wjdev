import styled from 'styled-components';

const Icon = styled.i`
  color: white;
  font-size: 5em;
  padding: 8px;
  text-decoration: none;
  transition: color 0.2s ease, font-size 0.2s ease;

  &:hover {
    color: #b14aed;
    font-size: 5.3em;
  }

  &:active {
    font-size: 7em;
  }
`;

export default Icon;

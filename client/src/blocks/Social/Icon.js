import styled from 'styled-components';

const Icon = styled.i`
  color: white;
  font-size: 5em;
  padding: 8px;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #b14aed;
    ${'' /* text-decoration: underline; */}
  }
`;

export default Icon;
